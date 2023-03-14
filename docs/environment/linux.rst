Linux
=====

.. contents:: Table of Contents
    :local:
    :depth: 3

Bootstrap Ubuntu 22.04
----------------------

Install VirtualBox Guest Additions:

.. code-block:: bash

    sudo add-apt-repository multiverse
    sudo apt update
    sudo apt install virtualbox-guest-utils virtualbox-guest-x11

Install common packages:

.. code-block:: bash

    sudo apt install vim mc nmap git mercurial subversion cmake autoconf build-essential \
                     tmux screen minicom htop wget curl rsync python3-pip python3-venv ipython3

Install packages for building a toolchain using Crosstool-NG or our scripts:

.. code-block:: bash

    sudo apt install autoconf help2man libtool libtool-bin texinfo byacc flex libncurses5-dev \
                     zlib1g-dev libexpat1-dev texlive build-essential git wget gawk bison \
                     xz-utils make python3 rsync locales

Bootstrap Fedora 37
-------------------

Install common packages:

.. code-block:: bash

    sudo dnf update
    sudo dnf groupinstall "Development Tools" "Development Libraries"
    sudo dnf install mercurial mc cmake tmux screen minicom htop nmap

Install packages for building a toolchain using Crosstool-NG or our scripts:

.. code-block:: bash

    sudo dnf install -y autoconf bison bzip2 diffutils file flex gcc-c++ git \
                        gperf help2man libtool make ncurses-devel patch \
                        perl-Thread-Queue python3 rsync texinfo unzip wget \
                        which xz expat expat-devel pahole

Configure ``.profile``
----------------------

.. code-block:: bash

    # Enable networking through VPN
    wsl.exe -d wsl-vpnkit service wsl-vpnkit start

    export BASE_SCRATCH="/SCRATCH/ykolerov"
    export BASE_YKOLEROV=""
    export BASE="${BASE_YKOLEROV}"

    export TOOLS="$BASE/tools"
    export REPOS="$BASE/repos"

    # Toolchain
    export PATH="$TOOLS/arc64-elf/bin:$PATH"
    export PATH="$TOOLS/arc-elf32/bin:$PATH"
    export PATH="$TOOLS/release-2022.09/arc-snps-linux-gnu/bin:$PATH"
    export PATH="$TOOLS/release-2022.09/arc64-snps-linux-gnu/bin:$PATH"
    export PATH="$TOOLS/release-2022.09/arc32-snps-linux-uclibc/bin:$PATH"
    export PATH="$TOOLS/i686-w64-mingw32/bin:$PATH"
    export PATH="$TOOLS/x86_64-w64-mingw32/bin:$PATH"

    # QEMU
    export QEMU_HOME="$TOOLS/qemu"
    export PATH="${QEMU_HOME}/bin:$PATH"

    # Buildroot
    export BR2_DL_DIR="$REPOS/buildroot_dl"

    # Elfutils
    export PATH="/tools/elfutils/bin:$PATH"
    export LD_LIBRARY_PATH="/tools/elfutils/lib:$LD_LIBRARY_PATH"


Configure ``.bashrc``
---------------------

.. code-block:: bash

    function clean_path() {
        export PATH=$(echo "$PATH" | sed -e 's/:\/mnt\/c.*//')
    }

    function clean_ld() {
        unset LD_LIBRARY_PATH
    }

    # This function as its name says removes desired substrings from PATH
    # (shamelessly stolen from http://unix.stackexchange.com/a/291611)
    function path_remove {
        # Delete path by parts so we can never accidentally remove sub paths
        PATH=${PATH//":$1:"/":"} # delete any instances in the middle
        PATH=${PATH/#"$1:"/} # delete any instance at the beginning
        PATH=${PATH/%":$1"/} # delete any instance in the at the end
    }

    export -f clean_path
    export -f clean_ld
    export -f path_remove

Setup Git
---------

.. code-block:: bash

    git config --global user.name "Yuriy Kolerov"
    git config --global user.email "ykolerov@synopsys.com"

Install Rust
------------

.. code-block:: bash

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

Elfutils
--------

.. code-block:: bash

    sudo dnf install libmicrohttpd libmicrohttpd-devel libsq3 libsq3-devel libarchive libarchive-devel gettext-devel
    git clone https://sourceware.org/git/elfutils.git
    cd elfutils
    autoreconf -fi
    ./configure --prefix=/tools/elfutils
    make
    make install
