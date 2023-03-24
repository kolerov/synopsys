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

Install main groups:

.. code-block:: bash

    sudo dnf update
    sudo dnf groupinstall "Development Tools" \
                          "Development Libraries" \
                          "C Development Tools and Libraries"

Install all necessary packages for work and dependencies for building a toolchain:

.. code-block:: bash

    sudo dnf install autoconf bison brlapi-devel bzip2 capstone-devel cmake \
                     curl-devel cyrus-sasl-devel diffutils dwarves expat \
                     expat-devel file flex gcc-c++ git gperf gtk3-devel \
                     help2man htop libaio-devel libattr-devel libcap-ng-devel \
                     libfdt-devel libgcrypt-devel libibverbs-devel libiscsi-devel \
                     libjpeg-devel libpng-devel librdmacm-devel libseccomp-devel \
                     libssh-devel libtool libusbx-devel libuuid-devel lzo-devel \
                     make mc mercurial minicom ncurses-devel nettle-devel \
                     ninja-build nmap patch perl-Thread-Queue pixman-devel \
                     pulseaudio-libs-devel python3 rsync SDL2-devel \
                     screen snappy-devel systemtap-sdt-devel texinfo tmux \
                     unzip vte291-devel wget which xz zlib-devel \
                     libmicrohttpd libmicrohttpd-devel libsq3 libsq3-devel \
                     libarchive libarchive-devel gettext-devel

Configure ``.profile``
----------------------

Note that Fedora uses ``.bash_profile`` by default for users instead of ``.profile``.

.. code-block:: bash

    # Enable networking through VPN in WSL
    wsl.exe -d wsl-vpnkit service wsl-vpnkit start
    
    # Common places
    export BASE=""
    export TOOLS="$BASE/tools"
    export REPOS="$BASE/repos"

    # Toolchain
    export PATH="$TOOLS/arc-elf32/bin:$PATH"
    export PATH="$TOOLS/arc64-elf/bin:$PATH"
    export PATH="$TOOLS/arc-linux-gnu/bin:$PATH"
    export PATH="$TOOLS/arc32-linux-uclibc/bin:$PATH"
    export PATH="$TOOLS/arc64-linux-gnu/bin:$PATH"
    export PATH="$TOOLS/i686-w64-mingw32/bin:$PATH"
    export PATH="$TOOLS/x86_64-w64-mingw32/bin:$PATH"

    # QEMU
    export QEMU_HOME="$TOOLS/qemu"
    export PATH="${QEMU_HOME}/bin:$PATH"

    # Buildroot
    export BR2_DL_DIR="$REPOS/buildroot_dl"

    # Elfutils
    export PATH=/tools/elfutils/bin:$PATH
    export LD_LIBRARY_PATH=/tools/elfutils/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}

    # Pahole
    export PATH=/tools/pahole/bin:$PATH
    export LD_LIBRARY_PATH=/tools/pahole/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}


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

Build and install elfutils
--------

.. code-block:: bash

    sudo dnf install libmicrohttpd libmicrohttpd-devel libsq3 libsq3-devel libarchive libarchive-devel gettext-devel
    git clone https://sourceware.org/git/elfutils.git
    autoreconf -fi
    mkdir -p elfutils/build
    cp elfutils/build
    ../configure --prefix=/tools/elfutils --enable-maintainer-mode
    make
    make install

Build and install pahole
------------------------

.. warning::

    We use here 1.23 version of Pahole because of this commit in the latest version:
    
      https://git.kernel.org/pub/scm/devel/pahole/pahole.git/commit/?id=9712d9ec929fb6b3595d2970bbbac8b0b1c10ead

    It leads to generating BTF information for 64-bit enumerations. However, Linux kernels below 6.0 version
    contain tools which don't support such BTF structures and crash while building the kernel. 

.. code-block:: bash

    git clone -b v1.23 https://git.kernel.org/pub/scm/devel/pahole/pahole.git
    mkdir pahole/build
    cd pahole/build
    cmake -D__LIB=lib -DCMAKE_INSTALL_PREFIX=/tools/pahole ..
    make install
