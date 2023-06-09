Building QEMU
=============

You can find a good tutorial for building QEMU in Wiki of the project: https://wiki.qemu.org/Hosts/Linux.

Install packages for Ubuntu
---------------------------

.. code-block:: shell

    sudo apt install git libglib2.0-dev libfdt-dev libpixman-1-dev zlib1g-dev ninja-build \
                     git-email libaio-dev libbluetooth-dev libcapstone-dev libbrlapi-dev \
                     libbz2-dev libcap-ng-dev libcurl4-gnutls-dev libgtk-3-dev libibverbs-dev \
                     libjpeg8-dev libncurses5-dev libnuma-dev librbd-dev librdmacm-dev libsasl2-dev \
                     libsdl2-dev libseccomp-dev libsnappy-dev libssh-dev libvde-dev libvdeplug-dev \
                     libvte-2.91-dev libxen-dev liblzo2-dev valgrind xfslibs-dev

Install packages for CentOS 7
-----------------------------

.. code-block:: bash

    # Install latest development tools
    sudo yum install centos-release-scl
    sudo yum install devtoolset-9
    scl enable devtoolset-9 bash

    # Install dependencies
    sudo yum install git glib2-devel libfdt-devel pixman-devel zlib-devel bzip2 ninja-build python3 \
                     SDL2-devel libaio-devel libcap-ng-devel libiscsi-devel capstone-devel gtk3-devel \
                     vte291-devel ncurses-devel libseccomp-devel nettle-devel libattr-devel libjpeg-devel \
                     brlapi-devel libgcrypt-devel lzo-devel snappy-devel librdmacm-devel libibverbs-devel \
                     cyrus-sasl-devel libpng-devel libuuid-devel pulseaudio-libs-devel curl-devel libssh-devel \
                     systemtap-sdt-devel libusbx-devel

Install packages for Fedora
---------------------------

.. code-block:: shell

    sudo dnf install git glib2-devel libfdt-devel pixman-devel zlib-devel bzip2 \
                     ninja-build python3 libaio-devel libcap-ng-devel libiscsi-devel \
                     capstone-devel gtk3-devel SDL2-devel vte291-devel ncurses-devel \
                     libseccomp-devel nettle-devel libattr-devel libjpeg-devel \
                     brlapi-devel libgcrypt-devel lzo-devel snappy-devel \
                     librdmacm-devel libibverbs-devel cyrus-sasl-devel libpng-devel \
                     libuuid-devel pulseaudio-libs-devel curl-devel libssh-devel \
                     systemtap-sdt-devel libusbx-devel

Build and install QEMU
----------------------

Retrieve source code and build:

.. code-block:: shell

    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/qemu
    mkdir -p qemu/build
    cd qemu/build
    ../configure --target-list=arc-softmmu,arc64-softmmu,arc-linux-user,arc64-linux-user \
                 --enable-debug --enable-debug-tcg --prefix=/tools/qemu
    make -j $(nproc)
    make install

Add these variables to your ``.bashrc`` or ``.profile``:

.. code-block:: shell

    export QEMU_HOME=/tools/qemu
    export PATH=$QEMU_HOME/bin:$PATH

