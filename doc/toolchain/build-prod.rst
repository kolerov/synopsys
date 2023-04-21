Building from ``crosstool-ng``
==============================

You can find a repository here: https://github.com/foss-for-synopsys-dwc-arc-processors/crosstool-ng. It's used
for building production versions of the toolchain.

Firstly, prepare your environment:

.. code-block:: shell

    sudo apt-get install -y autoconf help2man libtool libtool-bin texinfo byacc flex libncurses5-dev \
                    zlib1g-dev libexpat1-dev texlive build-essential git wget gawk \
                    bison xz-utils make python3 rsync locales

Retrieve Crosstool-NG and build it:

.. code-block:: shell

    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/crosstool-ng.git
    cd crosstool-ng
    ./bootstrap
    ./configure --enable-local
    make

Configure and build a toolchain:

.. code-block:: shell

    ./ct-ng snps-arc-multilib-elf32
    ./ct-ng menuconfig
    ./ct-ng build

After building a toolchain you can find it installed in ``$HOME/x-tools`` directory.
It's necessary to move to another place because of well-known bug (https://github.com/crosstool-ng/crosstool-ng/issues/1809).

Most interesting configurations:

* ``snps-arc-multilib-elf32`` -- Bare-metal cross-toolchain for wide range of ARCompact & ARCv2 processors (ARC600, ARC700, AEC EM & HS) for 64-bit Linux hosts
* ``snps-arc-archs-linux-gnu`` -- Linux glibc cross-toolchain for ARC HS3x & HS4x processors for 64-bit Linux hosts
* ``snps-arc64-snps-linux-gnu`` -- Linux glibc cross-toolchain for for ARC HS6x processors for 64-bit Linux hosts
