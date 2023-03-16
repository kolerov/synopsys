Building from ``arc-gnu-toolchain``
===================================

Prepare environment
-------------------

You can find a repository here: https://github.com/foss-for-synopsys-dwc-arc-processors/arc-gnu-toolchain. It's used
for building development versions of the toolchain.

Firstly, prepare your environment:

.. code-block:: shell

    sudo apt-get install -y autoconf automake autotools-dev curl \
        libmpc-dev libmpfr-dev libgmp-dev libexpat1-dev gawk build-essential \
        libncurses-dev bison flex texinfo gperf libtool libtool-bin \
        patchutils bc zlib1g-dev

Obtain and configure scripts:

.. code-block:: shell

    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/arc-gnu-toolchain
    cg arc-gnu-toolchain
    autoconf

Build baremetal toolchain
-------------------------

.. code-block:: shell

    # ARCv2 - baremetal
    ./configure --target=arc --with-cpu=archs --prefix=/tools/arc-elf32 \
        --enable-multilib --disable-werror --disable-qemu \
        --with-target-cflags="-O0 -g3 -fvar-tracking-assignments" \
        --with-target-cxxflags="-O0 -g3 -fvar-tracking-assignments"

    # ARCv3 - baremetal
    ./configure --target=arc64 --with-cpu=hs6x --prefix=/tools/arc64-elf \
        --enable-multilib --disable-werror --disable-qemu \
        --with-target-cflags="-O0 -g3 -fvar-tracking-assignments" \
        --with-target-cxxflags="-O0 -g3 -fvar-tracking-assignments"

    make -j $(nproc)
    make install

Build Linux toolchain
---------------------

Prepare headers for ARCv2:

.. code-block:: shell

    # For ARCv2
    git clone https://github.com/torvalds/linux
    cd linux
    git checkout 5.16
    make headers_install ARCH=arc CONFIG_ISA_ARCV2=y CROSS_COMPILE="arc-elf32-" INSTALL_HDR_PATH=/headers/path

    # For ARCv3 (HS6x)
    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/linux
    cd linux
    git checkout arc64
    make headers_install ARCH=arc CONFIG_ISA_ARCV3=y CROSS_COMPILE="arc64-elf-" INSTALL_HDR_PATH=/headers/path

Configure and build:

.. code-block:: shell

    # For ARCv2
    ./configure --target=arc --with-cpu=archs --enable-linux --disable-werror --disable-qemu \
        --with-linux-headers-src=/headers/path/../include \
        --prefix=/tools/arc-snps-linux-gnu

    # For ARCv3 (HS6x)
    ./configure --target=arc64 --enable-linux --disable-werror --disable-qemu \
        --with-linux-headers-src=/headers/path/../include \
        --prefix=/tools/arc64-snps-linux-gnu

    make -j $(nproc)
    make install

Scripts 
-------

My tree for building environment::

    $ tree -L 2
    .
    ├── build-arc-linux-gnu.sh
    ├── common.sh
    ├── out
    │   ├── arc-elf32
    │   ├── arc-linux-gnu
    │   ├── arc32-linux-uclibc
    │   ├── arc64-elf
    │   └── arc64-linux-gnu
    └── src
        ├── arc-gnu-toolchain
        ├── binutils-gdb
        ├── gcc
        ├── glibc
        ├── linux-headers
        └── newlib

    13 directories, 2 files

Common scripts:

.. code-block:: bash
    :caption: common.sh

    BUILDER_PATH=`realpath ./src/arc-gnu-toolchain`
    HEADERS_PATH=`realpath ./src/linux-headers/include`
    OUT_DIR=`realpath out/$NAME`
    LOG_FILE="${OUT_DIR}/build.log"

    prepare() {
        rm -rf $OUT_DIR
        mkdir $OUT_DIR
        touch $LOG_FILE
        cd $OUT_DIR
    }

    # $1 - for --target=...
    # $2 - for --with=cpu=...
    # $3 - for prefix
    configure_linux() {
        unset LD_LIBRARY_PATH
        source /etc/environment
        export PATH
        $BUILDER_PATH/configure --target=$1 --enable-linux --with-cpu=$2 --with-fpu=none \
            --with-linux-headers-src="${HEADERS_PATH}" \
            --prefix=$3
    }

    # $1 - for --target=...
    # $2 - for --with=cpu=...
    # $3 - for prefix
    configure_baremetal() {
        unset LD_LIBRARY_PATH
        source /etc/environment
        export PATH
        rm -rf $OUT_DIR
        mkdir $OUT_DIR
        touch $LOG_FILE
        cd $OUT_DIR
        $BUILDER_PATH/configure --target=$1 --enable-multilib --with-cpu=$2 --with-fpu=none \
            --with-target-cflags="-O0 -g3 -fvar-tracking-assignments" \
            --with-target-cxxflags="-O0 -g3 -fvar-tracking-assignments"
            --prefix=$3
    }

    build() {
        unset LD_LIBRARY_PATH
        source /etc/environment
        export PATH
        make clean
        make V=1 -j $(nproc) 2>&1 | tee $LOG_FILE
    }

    build_and_install() {
        build
        make install
    }

An example for Linux toolchain for ARC HS 4x:

.. code-block:: bash
    :caption: build-arc-linux-gnu.sh

    #!/bin/bash -ex

    NAME="arc-linux-gnu"
    PREFIX="/tools/$NAME"

    . common.sh

    prepare
    configure_linux arc archs $PREFIX
    build
