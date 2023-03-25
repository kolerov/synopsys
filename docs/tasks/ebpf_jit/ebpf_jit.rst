🟡 eBPF in Linux for ARC
========================

.. contents:: :local:

Build and install elfutils and pahole
-------------------------------------

Build and install custom elfutils and pahole for your host system
according to these instructions:

1. :ref:`build-elfutils`
2. :ref:`build-pahole`

Generate and setup OpenSSH keys
-------------------------------

Generate keys (use your own home path)::

    $ mkdir -p ~/.ssh/keys
    $ ssh-keygen -t rsa -C "arc@synopsys"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/ykolerov/.ssh/id_rsa): /home/ykolerov/.ssh/keys/arc
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /home/ykolerov/.ssh/keys/arc
    Your public key has been saved in /home/ykolerov/.ssh/keys/arc.pub

Configure your SSH hosts in ``~/.ssh/config``::

    Host arc
        HostName            127.0.0.1
        Port                2022
        User                root
        IdentityFile        ~/.ssh/keys/arc

Building ``rootfs.cpio``
------------------------

Clone Buildroot from upstream repository and create a build directory:

.. code-block:: bash

    git clone https://git.buildroot.net/buildroot
    mkdir buildroot/build
    cd buildroot/build

Create ``busybox.fragment`` file for Busybox:

.. code-block:: text
    :caption: busybox.fragment

    CONFIG_FEATURE_PIDFILE=y
    CONFIG_PID_FILE_PATH="/var/run"
    CONFIG_DEBUG=y
    CONFIG_DEBUG_PESSIMIZE=y
    CONFIG_FTPD=y
    CONFIG_FEATURE_FTPD_WRITE=y
    CONFIG_FEATURE_FTPD_ACCEPT_BROKEN_LIST=y
    CONFIG_FEATURE_FTPD_AUTHENTICATION=y
    CONFIG_NC=y
    CONFIG_NETCAT=y
    CONFIG_NC_SERVER=y
    CONFIG_NC_EXTRA=y
    CONFIG_NC_110_COMPAT=y
    CONFIG_TELNETD=y
    CONFIG_FEATURE_TELNETD_STANDALONE=y
    CONFIG_FEATURE_TELNETD_PORT_DEFAULT=23
    CONFIG_FEATURE_TELNETD_INETD_WAIT=y

Create ``device_table.txt`` for custom device table.

.. code-block:: text
    :caption: device_table.txt

    # See package/makedevs/README for details
    #
    # This device table is used to assign proper ownership and permissions
    # on various files. It doesn't create any device file, as it is used
    # in both static device configurations (where /dev/ is static) and in
    # dynamic configurations (where devtmpfs, mdev or udev are used).
    #
    # <name>                                <type>  <mode>  <uid>   <gid>   <major> <minor> <start> <inc>   <count>
    /dev                                    d       755     0       0       -       -       -       -       -
    /tmp                                    d       1777    0       0       -       -       -       -       -
    /etc                                    d       755     0       0       -       -       -       -       -
    /root                                   d       700     0       0       -       -       -       -       -
    /var/www                                d       755     33      33      -       -       -       -       -
    /etc/shadow                             f       600     0       0       -       -       -       -       -
    /etc/passwd                             f       644     0       0       -       -       -       -       -
    /etc/network/if-up.d                    d       755     0       0       -       -       -       -       -
    /etc/network/if-pre-up.d                d       755     0       0       -       -       -       -       -
    /etc/network/if-down.d                  d       755     0       0       -       -       -       -       -
    /etc/network/if-post-down.d             d       755     0       0       -       -       -       -       -
    # shahab's changes
    /etc/dropbear/dropbear_rsa_host_key     f       400     0       0       -       -       -       -       -
    /etc/dropbear/dropbear_ed25519_host_key f       400     0       0       -       -       -       -       -
    /etc/profile.d/home-root.sh             f       755     0       0       -       -       -       -       -
    /usr/bin/server                         f       755     0       0       -       -       -       -       -
    # uncomment this to allow starting x as non-root
    #/usr/X11R6/bin/Xfbdev                  f       4755    0       0       -       -       -       -       -

Copy ``overlay`` directory from the repository:

.. code-block:: text

    cp -r <docs-repository>/tasks/ebpf_jit/overlay .

Add your public key to the overlay directory:

.. code-block:: bash

    mkdir -p overlay/root/.ssh
    cp ~/.ssh/keys/arc.pub overlay/root/.ssh/authorized_keys

Save this configuration as ``ebpf_defconfig``:

.. code-block:: linuxconfig
    :caption: ebpf_defconfig

    BR2_arcle=y
    BR2_archs38=y
    BR2_TOOLCHAIN_EXTERNAL=y
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM=y
    BR2_TOOLCHAIN_EXTERNAL_PATH="/tools/arc-linux-gnu"
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM_PREFIX="$(ARCH)-linux-gnu"
    BR2_TOOLCHAIN_EXTERNAL_HEADERS_5_16=y
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM_GLIBC=y
    BR2_TOOLCHAIN_EXTERNAL_INET_RPC=n
    BR2_TOOLCHAIN_EXTERNAL_CXX=y
    BR2_TOOLCHAIN_EXTERNAL_GDB_SERVER_COPY=y
    BR2_ENABLE_DEBUG=y
    BR2_DEBUG_3=y
    BR2_OPTIMIZE_G=y
    BR2_TARGET_GENERIC_HOSTNAME="archs"
    BR2_ROOTFS_DEVICE_TABLE="build/device_table.txt"
    BR2_SYSTEM_DHCP="eth0"
    BR2_ROOTFS_OVERLAY="build/overlay"
    BR2_PACKAGE_BUSYBOX_CONFIG_FRAGMENT_FILES="build/busybox.fragment"
    BR2_PACKAGE_NCURSES=y
    BR2_PACKAGE_NCURSES_WCHAR=y
    BR2_PACKAGE_HAVEGED=y
    BR2_PACKAGE_DROPBEAR=y
    BR2_PACKAGE_DROPBEAR_DISABLE_REVERSEDNS=y
    BR2_PACKAGE_RSYNC=y
    BR2_TARGET_ROOTFS_CPIO=y
    BR2_PACKAGE_HOST_KMOD=y
    BR2_PACKAGE_LIBBPF=y
    BR2_PACKAGE_BPFTOOL=y
    BR2_PACKAGE_ELFUTILS=y

Build a Buildroot configuration file and the build ``rootfs.cpio``:

.. code-block:: bash

    make -C .. O=$(pwd) defconfig BR2_DEFCONFIG=build/ebpf_defconfig
    make -j $(nproc)

Building a Linux kernel
-----------------------

Retrieve sources of the Linux kernel with latest changes for eBPF JIT:

.. code-block:: bash

    git clone -b shahab-bpf-jit https://github.com/foss-for-synopsys-dwc-arc-processors/linux
    mkdir linux/build
    cd linux/build

Change ``kernel/bpf/Makefile`` to prevent some build errors:

.. code-block:: diff

    diff --git a/kernel/bpf/Makefile b/kernel/bpf/Makefile
    index ae90af5b0425..4699a022079a 100644
    --- a/kernel/bpf/Makefile
    +++ b/kernel/bpf/Makefile
    @@ -4,7 +4,7 @@ ifneq ($(CONFIG_BPF_JIT_ALWAYS_ON),y)
    # ___bpf_prog_run() needs GCSE disabled on x86; see 3193c0836f203 for details
    cflags-nogcse-$(CONFIG_X86)$(CONFIG_CC_IS_GCC) := -fno-gcse
    endif
    -CFLAGS_core.o += $(call cc-disable-warning, override-init) $(cflags-nogcse-yy) -Og -g3
    +CFLAGS_core.o += $(call cc-disable-warning, override-init) $(cflags-nogcse-yy) -Og -g3 -finline-functions-called-once

Save this configuration (user your own path to ``.cpio`` file) to ``arch/arc/configs/ebpf_jit_defconfig``:

.. code-block:: linuxconfig
    :caption: ebpf_jit_defconfig

    # CONFIG_SWAP is not set
    CONFIG_PERF_EVENTS=y
    CONFIG_BPF_EVENTS=y
    CONFIG_SYSVIPC=y
    CONFIG_POSIX_MQUEUE=y
    # CONFIG_CROSS_MEMORY_ATTACH is not set
    CONFIG_NO_HZ_IDLE=y
    CONFIG_HIGH_RES_TIMERS=y
    CONFIG_BPF_SYSCALL=y
    CONFIG_BPF_JIT=y
    # CONFIG_BPF_UNPRIV_DEFAULT_OFF is not set
    CONFIG_PREEMPT=y
    CONFIG_IKCONFIG=y
    CONFIG_IKCONFIG_PROC=y
    CONFIG_NAMESPACES=y
    # CONFIG_UTS_NS is not set
    # CONFIG_PID_NS is not set
    CONFIG_INITRAMFS_SOURCE="../buildroot/build/images/rootfs.cpio"
    CONFIG_ARC_BUILTIN_DTB_NAME="haps_hs"
    CONFIG_EXPERT=y
    # CONFIG_SGETMASK_SYSCALL is not set
    CONFIG_DEBUG_PERF_USE_VMALLOC=y
    # CONFIG_COMPAT_BRK is not set
    CONFIG_SLAB=y
    CONFIG_KPROBES=y
    CONFIG_COMPAT_32BIT_TIME=y
    CONFIG_MODULES=y
    # CONFIG_COMPACTION is not set
    CONFIG_NET=y
    CONFIG_PACKET=y
    CONFIG_PACKET_DIAG=y
    CONFIG_UNIX=y
    CONFIG_UNIX_DIAG=y
    CONFIG_NET_KEY=y
    CONFIG_INET=y
    # CONFIG_IPV6 is not set
    # CONFIG_WIRELESS is not set
    CONFIG_DEVTMPFS=y
    CONFIG_DEVTMPFS_MOUNT=y
    # CONFIG_STANDALONE is not set
    # CONFIG_PREVENT_FIRMWARE_BUILD is not set
    # CONFIG_FIRMWARE_MEMMAP is not set
    CONFIG_OF=y
    CONFIG_VIRTIO_BLK=y
    CONFIG_NETDEVICES=y
    CONFIG_VIRTIO_NET=y
    # CONFIG_ETHERNET is not set
    # CONFIG_WLAN is not set
    CONFIG_INPUT_EVDEV=y
    # CONFIG_INPUT_KEYBOARD is not set
    # CONFIG_INPUT_MOUSE is not set
    # CONFIG_SERIO is not set
    # CONFIG_LEGACY_PTYS is not set
    CONFIG_SERIAL_8250=y
    CONFIG_SERIAL_8250_16550A_VARIANTS=y
    CONFIG_SERIAL_8250_CONSOLE=y
    CONFIG_SERIAL_8250_NR_UARTS=1
    CONFIG_SERIAL_8250_RUNTIME_UARTS=1
    CONFIG_SERIAL_8250_DW=y
    CONFIG_SERIAL_OF_PLATFORM=y
    # CONFIG_HW_RANDOM is not set
    # CONFIG_HWMON is not set
    # CONFIG_HID is not set
    # CONFIG_USB_SUPPORT is not set
    CONFIG_VIRTIO_MMIO=y
    CONFIG_COMMON_CLK=y
    # CONFIG_IOMMU_SUPPORT is not set
    CONFIG_EXT2_FS=y
    CONFIG_EXT2_FS_XATTR=y
    CONFIG_TMPFS=y
    # CONFIG_MISC_FILESYSTEMS is not set
    CONFIG_NFS_FS=y
    CONFIG_DEBUG_INFO=y
    CONFIG_DEBUG_INFO_DWARF_TOOLCHAIN_DEFAULT=y
    CONFIG_DEBUG_INFO_BTF=y
    CONFIG_GDB_SCRIPTS=y
    CONFIG_FRAME_WARN=1024
    CONFIG_DEBUG_FS=y
    CONFIG_DEBUG_MEMORY_INIT=y
    # CONFIG_DEBUG_PREEMPT is not set
    CONFIG_BOOTTIME_TRACING=y
    CONFIG_IRQSOFF_TRACER=y
    CONFIG_PREEMPT_TRACER=y
    CONFIG_SCHED_TRACER=y
    CONFIG_HWLAT_TRACER=y
    CONFIG_FTRACE_SYSCALLS=y
    CONFIG_TEST_BPF=m

Build the Linux kernel:

.. code-block:: bash

    export ARCH=arc
    export CROSS_COMPILE=arc-linux-gnu-
    make -C .. O=$(pwd) ebpf_jit_defconfig
    make menuconfig
    make -j $(nproc)

Workaround for ``complex float`` error
--------------------------------------

ARC toolchains generate ``complex float`` DIE entries in ``libgcc``.
At the moment such entries are not yet handled by pahole.
So, it's necessary to disable BTF floats.

If you want to build Linux kernel from another branch with BTF information you
can apply this patch (https://github.com/foss-for-synopsys-dwc-arc-processors/linux/commit/b17d1955b67493afe37430694c8982411336fc4c):

.. code-block:: diff

    diff --git a/scripts/pahole-flags.sh b/scripts/pahole-flags.sh
    index 0d99ef17e4a5..23af14c6ef94 100755
    --- a/scripts/pahole-flags.sh
    +++ b/scripts/pahole-flags.sh
    @@ -14,7 +14,7 @@ if [ "${pahole_ver}" -ge "118" ] && [ "${pahole_ver}" -le "121" ]; then
            extra_paholeopt="${extra_paholeopt} --skip_encoding_btf_vars"
    fi
    if [ "${pahole_ver}" -ge "121" ]; then
    -       extra_paholeopt="${extra_paholeopt} --btf_gen_floats"
    +       extra_paholeopt="${extra_paholeopt}"
    fi
    if [ "${pahole_ver}" -ge "122" ]; then
            extra_paholeopt="${extra_paholeopt} -j"

Booting
-------

Create a directory ``boot`` with this ``Makefile``:

.. literalinclude:: Makefile_boot
    :language: Makefile

Just run ``make`` adn QEMU will boot.

Run eBPF tests
--------------

On host system:

.. code-block:: bash

    ssh arc "mount -t debugfs debugfs /sys/kernel/debug"
    ssh arc "sysctl net.core.bpf_jit_enable=1"
    rsync ../linux/build/lib/test_bpf.ko arc:

On target system:

.. code-block:: bash

    insmod test_bpf.ko

Analyzing dumps
---------------

Create a directory ``dump`` with this ``Makefile``:

.. literalinclude:: Makefile_dump
    :language: Makefile

Get raw JITed bytes from test's output and save it to ``dump`` and run ``make``
to get assembler code.

Build a simple BPF application
------------------------------

Generate ``vmlinux.h`` file from ``vmlinux`` image, copy all necessary libraries and headers:

.. code-block:: bash

    mkdir -p include/bpf
    bpftool --debug btf dump file ../linux/build/vmlinux format c > include/vmlinux.h
    mkdir lib
    cp -f ../buildroot/build/build/libbpf-*/src/libbpf.a lib
    cp -f ../buildroot/build/build/elfutils-*/libelf/libelf.a lib
    cp -f ../buildroot/build/build/libzlib*/libz.a lib
    cp -r -f ../buildroot/build/build/libbpf-*/src/*.h include/bpf/
    cp -r -f ../buildroot/build/build/libbpf-*/include/uapi/linux include

We are going to use an example from https://github.com/libbpf/libbpf-bootstrap repository.
Download sources for `minimal.c`` example:

.. code-block:: bash

    git clone https://github.com/libbpf/libbpf-bootstrap
    cp libbpf-bootstrap/examples/c/minimal.* .

Compile an object file for BPF part of the program:

.. code-block:: bash

    clang -g -O2 -target bpf -D_TARGET_ARCH_arc -I./include \
          -idirafter /tools/arc-linux-gnu/sysroot/usr/include \
          -c minimal.bpf.c -o minimal.bpf.o

You can inspect eBPF code using this command:

.. code-block:: bash

    llvm-objdump -S --no-show-raw-insn minimal.bpf.o

Generate a skeleton file for a program:

.. code-block:: bash

    bpftool gen skeleton minimal.bpf.o > minimal.skel.h

Build the final program and copy it to the target:

.. code-block:: bash

    arc-linux-gnu-gcc -g -Wall -I./include -L./lib minimal.c -lbpf -lelf -lz -o minimal
    rsync minimal arc:


