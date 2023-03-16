🟡 glibc testsuite fails with vanilla Linux kernels
====================================================

The Problem
-----------

Issue is initially described on GitHub: https://github.com/foss-for-synopsys-dwc-arc-processors/qemu/issues/147

Configure NFS (Fedora 37)
-------------------------

Install NFS:

.. code-block:: shell

    dnf -y install nfs-utils

Add this line to ``/etc/exports`` (you can find ``anonuid`` and ``anongid`` using ``id -u`` and ``id -g`` respectively):

.. code-block:: text

    /home/ykolerov/workspace *(rw,all_squash,anonuid=1000,anongid=1000,no_subtree_check,insecure)

Enable services and add rules for firewall:

.. code-block:: shell

    sudo systemctl enable --now rpcbind nfs-server
    sudo systemctl enable sshd
    sudo systemctl start sshd
    sudo firewall-cmd --add-service=nfs --permanent
    sudo firewall-cmd --add-service={nfs3,mountd,rpc-bind} --permanent
    sudo firewall-cmd --reload

Configure NFS (WSL2 with Ubuntu 22.04)
--------------------------------------

Add this line to ``/etc/exports`` (you can find ``anonuid`` and ``anongid`` using ``id -u`` and ``id -g`` respectively):

.. code-block:: text

    /home/ykolerov/workspace *(rw,all_squash,anonuid=1000,anongid=1000,no_subtree_check,insecure)

Enable services:

.. code-block:: shell

    sudo service rpcbind start
    sudo service nfs-kernel-server start
    sudo exportfs -a


Configure TAP interface
-----------------------

.. code-block:: shell

    sudo ip tuntap add tap1 mode tap
    sudo ip addr add 10.42.0.1/24 dev tap1
    sudo ip link set tap1 up

Reproduce
---------

Prepare Buildroot:

.. code-block:: shell

    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/buildroot
    mkdir buildroot_build
    cd buildroot_build

Create configuration file for Buildroot with name ``glibc_test_defconfig``:

.. code-block:: text

    BR2_arcle=y
    BR2_archs38=y

    #BR2_TOOLCHAIN_EXTERNAL=y
    #BR2_TOOLCHAIN_EXTERNAL_CUSTOM=y
    #BR2_TOOLCHAIN_EXTERNAL_CUSTOM_GLIBC=y
    #BR2_TOOLCHAIN_EXTERNAL_PATH="../toolchain/tools/arc-snps-linux-gnu"
    #BR2_TOOLCHAIN_EXTERNAL_PATH="/tools/release-2022.09/arc-snps-linux-gnu"
    #BR2_TOOLCHAIN_EXTERNAL_CUSTOM_PREFIX="$(ARCH)-linux-gnu"
    #BR2_TOOLCHAIN_EXTERNAL_LOCALE=y
    #BR2_TOOLCHAIN_EXTERNAL_HAS_SSP=y
    #BR2_TOOLCHAIN_EXTERNAL_CXX=y
    #BR2_TOOLCHAIN_EXTERNAL_HEADERS_5_16=y
    #BR2_TOOLCHAIN_EXTERNAL_GDB_SERVER_COPY=y
    #BR2_TOOLCHAIN_EXTERNAL_WCHAR=y
    #BR2_TOOLCHAIN_EXTERNAL_INET_RPC=n

    BR2_TOOLCHAIN_USES_GLIBC=y
    BR2_ENABLE_LOCALE=y
    BR2_USE_WCHAR=y
    BR2_TOOLCHAIN_BUILDROOT_CXX=y
    BR2_TARGET_OPTIMIZATION="-O0 -g"

    BR2_GCC_VERSION_12_X=y
    BR2_TOOLCHAIN_GLIBC_GCONV_LIBS_COPY=y
    BR2_INSTALL_LIBSTDCPP=y

    BR2_SYSTEM_DHCP="eth0"
    BR2_LINUX_KERNEL=y
    BR2_LINUX_KERNEL_DEFCONFIG="haps_hs"
    BR2_LINUX_KERNEL_CUSTOM_VERSION=y
    BR2_LINUX_KERNEL_CUSTOM_VERSION_VALUE="5.16"
    BR2_LINUX_KERNEL_CONFIG_FRAGMENT_FILES="../linux.fragment"
    BR2_LINUX_KERNEL_VMLINUX=y
    BR2_TARGET_ROOTFS_INITRAMFS=y
    BR2_ROOTFS_OVERLAY="../overlay"
    BR2_ROOTFS_USERS_TABLES="../users-table.txt"
    BR2_PACKAGE_HOST_LINUX_HEADERS_CUSTOM_5_16=y
    BR2_PACKAGE_OPENSSH=y
    BR2_PACKAGE_NTP=y
    BR2_PACKAGE_NTP_NTPDATE=y
    BR2_PACKAGE_NFS_UTILS=y
    #BR2_PACKAGE_SSHFS=y
    BR2_PACKAGE_HAVEGED=y
    BR2_PACKAGE_MAKE=y

    BR2_PACKAGE_OVERRIDE_FILE="../buildroot_override"

Content of ``linux.fragment`` file:

.. code-block:: text

    CONFIG_NFS_FS=y
    CONFIG_NAMESPACES=y
    CONFIG_UTS_NS=y
    CONFIG_IPC_NS=y
    CONFIG_USER_NS=y
    CONFIG_PID_NS=y
    CONFIG_NET_NS=y
    CONFIG_CGROUPS=y
    CONFIG_MEMCG=y
    CONFIG_IPV6=y

Content of ``buildroot_override`` file:

.. code-block:: text

    LINUX_OVERRIDE_SRCDIR = /home/ykolerov/workspace/task_glibc_mmu_bug/linux-upstream
    GLIBC_OVERRIDE_SRCDIR = /home/ykolerov/workspace/task_glibc_mmu_bug/glibc-upstream

``linux-upstream`` is Linux on ``v5.16`` tag. ``glibc-upstream`` is glibc on ``glibc-2.36`` tag.

Content of ``users-table.txt`` file:

.. code-block:: text

    # cat ./board/corp/main/users-table.txt
    # <username> <uid> <group> <gid> <password> <home>      <shell>  <groups> <comment>
    ykolerov     1000  ykolerov 1000    =ykolerov      /home/ykolerov     /bin/sh  -    Yuriy Kolerov

Build Linux image:

.. code-block:: shell

    make -C ../buildroot O=`readlink -e .` defconfig DEFCONFIG=`readlink -e ./glibc_test_defconfig`
    make
    make glibc-dirclean
    make

Run image using QEMU:

.. code-block:: shell

    qemu-system-arc -cpu archs -M virt -display none -kernel images/vmlinux \
                    -netdev tap,id=net0,ifname=tap1,script=no,downscript=no \
                    -device virtio-net-device,netdev=net0 \
                    --global cpu.freq_hz=50000000 -nographic

Configure target:

.. code-block:: shell

    ifconfig eth0 10.42.0.100
    ping 10.42.0.1
    mkdir /home
    adduser ykolerov

Generate SSH keys (if necessary) and copy a public key to the target:

.. code-block:: shell

    ssh-keygen -t rsa
    ssh-keygen -R 10.42.0.100
    ssh-copy-id -f -i ~/.ssh/id_rsa.pub 10.42.0.100

Get a full path to the host's glibc directory:

.. code-block:: shell

    $ realpath build/glibc-*
    /home/ykolerov/workspace/task_glibc_mmu_bug/buildroot_build/build/glibc-2.36-66-ga1dc0be03c9dd850b864bd7a9c03cf8e396eb7ca

Create this directory in target and mount :

.. code-block:: shell

    mkdir -p /__full_path_to_glibc_source__

    # Using NFG
    mount -t nfs 10.42.0.1:/__full_path_to_glibc_source__ /__full_path_to_glibc_source__ -o nolock

    # Using SSHFS
    sshfs -o idmap=user,allow_other ykolerov@10.42.0.1:/__full_path_to_glibc_source__ /__full_path_to_glibc_source__

Go to the build directory of glibc and run tests:

.. code-block:: shell

    cd build/glibc-*/build
    make test-wrapper='/__full_path_to_glibc_source__/scripts/cross-test-ssh.sh 10.42.0.100' check
