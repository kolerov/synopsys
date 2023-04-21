Build Linux images
==================

.. contents:: Table of Contents
    :local:
    :depth: 3

Useful resources
----------------

* Manual: https://buildroot.org/downloads/manual/manual.html
* Training: https://bootlin.com/doc/training/buildroot/buildroot-slides.pdf

Obtaining Buildroot
-------------------

Prerequisite packages can be installed on Ubuntu 22.04 with the following command:

.. code-block:: shell

    sudo apt install texinfo byacc flex build-essential git

Firstly, it would be better to set a shared directory for downloaded packages in ``.bashrc``:

.. code-block:: bash

    export BR2_DL_DIR="$HOME/workspace/os/buildroot_dl"

Download and configure Buildroot:

.. code-block:: shell

    # Clone Synopsys repository
    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/buildroot

    # Clone upstream repository
    git clone https://git.buildroot.net/buildroot

    # Download .tar.gz archive
    wget https://buildroot.org/downloads/buildroot-2022.08.tar.gz
    tar -xf buildroot-2022.08.tar.gz
    mv buildroot-2022.08 buildroot

    mkdir buildroot/build
    cd buildroot/build

Build images
------------

Build Linux images using this command:

.. code-block:: shell

    make -C .. O=`readlink -e .` defconfig DEFCONFIG=`readlink -e path/to/your/defconfig`
    make

Build Linux images using a predefined configuration:

.. code-block:: shell

    make -C .. O=`readlink -e .` snps_archs38_haps_defconfig
    make

Configuring Buildroot
---------------------

ARC HS 3x/4x (glibc)
^^^^^^^^^^^^^^^^^^^^

Build Linux and toolchain:

.. code-block:: text

    BR2_arcle=y
    BR2_archs38=y
    BR2_GCC_VERSION_12_X=y
    BR2_TOOLCHAIN_USES_GLIBC=y
    BR2_INSTALL_LIBSTDCPP=y
    BR2_ENABLE_LOCALE=y
    BR2_USE_WCHAR=y
    BR2_LINUX_KERNEL=y
    BR2_LINUX_KERNEL_DEFCONFIG="haps_hs"
    BR2_LINUX_KERNEL_CUSTOM_VERSION=y
    BR2_LINUX_KERNEL_CUSTOM_VERSION_VALUE="5.16"
    BR2_LINUX_KERNEL_VMLINUX=y
    BR2_TARGET_ROOTFS_INITRAMFS=y

Build Linux but download a prebuilt toolchain (2022.09):

.. code-block:: text

    BR2_arcle=y
    BR2_archs38=y
    BR2_TOOLCHAIN_EXTERNAL=y
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM=y
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM_GLIBC=y
    BR2_TOOLCHAIN_EXTERNAL_DOWNLOAD=y
    BR2_TOOLCHAIN_EXTERNAL_URL="https://github.com/foss-for-synopsys-dwc-arc-processors/toolchain/releases/download/arc-2022.09-release/arc_gnu_2022.09_prebuilt_glibc_le_archs_linux_install.tar.gz"
    BR2_TOOLCHAIN_EXTERNAL_LOCALE=y
    BR2_TOOLCHAIN_EXTERNAL_HAS_SSP=y
    BR2_TOOLCHAIN_EXTERNAL_CXX=y
    BR2_TOOLCHAIN_EXTERNAL_HEADERS_5_16=y
    BR2_TOOLCHAIN_EXTERNAL_GDB_SERVER_COPY=y
    BR2_GCC_VERSION_12_X=y
    BR2_LINUX_KERNEL=y
    BR2_LINUX_KERNEL_DEFCONFIG="haps_hs"
    BR2_LINUX_KERNEL_CUSTOM_VERSION=y
    BR2_LINUX_KERNEL_CUSTOM_VERSION_VALUE="5.16"
    BR2_LINUX_KERNEL_VMLINUX=y
    BR2_TARGET_ROOTFS_INITRAMFS=y

ARC HS 5x (uClibc)
^^^^^^^^^^^^^^^^^^

ARC HS 6x (glibc)
^^^^^^^^^^^^^^^^^

Predefined configurations
^^^^^^^^^^^^^^^^^^^^^^^^^

Buildroot contains a set of predefined configurations:

.. code-block:: text

    snps_arc32_defconfig
    snps_arc64_defconfig
    snps_arc700_axs101_defconfig
    snps_archs38_axs103_defconfig
    snps_archs38_haps_defconfig
    snps_archs38_hsdk_defconfig

Additional configuration options
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use a toolchain from ``PATH``:

.. code-block:: text

    #BR2_TOOLCHAIN_EXTERNAL_DOWNLOAD is not set
    BR2_TOOLCHAIN_EXTERNAL_PATH="path-to-toolchain/$(ARCH)-snps-linux-gnu"
    BR2_TOOLCHAIN_EXTERNAL_CUSTOM_PREFIX="$(ARCH)-linux-gnu"

Use an overlay:

.. code-block:: text

    BR2_ROOTFS_OVERLAY="path/to/overlay"

Use additional options for Linux:

.. code-block:: text

    BR2_LINUX_KERNEL_CONFIG_FRAGMENT_FILES="path-to-fragments/linux.fragment"

Use custom repository for Linux:

.. code-block:: text

    #BR2_LINUX_KERNEL_CUSTOM_VERSION is not set
    #BR2_LINUX_KERNEL_CUSTOM_VERSION_VALUE is not set
    BR2_LINUX_KERNEL_CUSTOM_GIT=y
    BR2_LINUX_KERNEL_CUSTOM_REPO_URL="https://github.com/foss-for-synopsys-dwc-arc-processors/linux"
    BR2_LINUX_KERNEL_CUSTOM_REPO_VERSION="arc64"
