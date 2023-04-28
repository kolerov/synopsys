Configuring Linux
=================

.. contents:: Table of Contents
    :local:
    :depth: 3

All Linux Distributions
-----------------------

Grant an access to serial devices like ``/dev/ttyUSB0``:

.. code-block:: bash

    sudo usermod -aG dialout ykolerov

Setup CentOS 7
--------------

Add the user to ``wheel`` group to enabled ``sudo``:

.. code-block:: bash

    usermod -aG wheel ykolerov

Enable EPEL repository and update:

.. code-block:: bash

    sudo yum -y install epel-release
    sudo yum -y update

Install latest development tools and enable them:

.. code-block:: bash

    sudo yum install centos-release-scl
    sudo yum install devtoolset-9 rh-git227
    scl enable devtoolset-9 rh-git227 bash

Setup Ubuntu 22.04
------------------

Install common packages:

.. code-block:: bash

    sudo apt install vim mc nmap git mercurial subversion cmake autoconf build-essential \
                     tmux screen minicom htop wget curl rsync python3-pip python3-venv ipython3

Install packages for building a toolchain using Crosstool-NG or our scripts:

.. code-block:: bash

    sudo apt install autoconf help2man libtool libtool-bin texinfo byacc flex libncurses5-dev \
                     zlib1g-dev libexpat1-dev texlive build-essential git wget gawk bison \
                     xz-utils make python3 rsync locales

Setup Fedora 37
---------------

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
                     libarchive libarchive-devel gettext-devel texlive \
                     libmpc-devel mpfr-devel clang clang-devel llvm llvm-devel \
                     llvm-static bpftool

Install Digilent Adept 2
------------------------

Digilent Adept 2 may be downloaded here:

* https://digilent.com/reference/software/adept/start

Installing for Ubuntu:

.. code-block:: bash

    sudo apt install ./digilent.adept.runtime_2.26.1-amd64.deb
    sudo apt install ./digilent.adept.utilities_2.7.1-amd64.deb

Installing for CentOS 7:

.. code-block:: bash

    sudo yum install digilent.adept.runtime-2.26.1.x86_64.rpm
    sudo yum install digilent.adept.utilities-2.7.1.x86_64.rpm

Configure ``.profile``
----------------------

Note that Fedora uses ``.bash_profile`` by default for users instead of ``.profile``.

.. code-block:: bash

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

.. _build-elfutils:

Build and Install ``elfutils``
------------------------------

Dependencies for Fedora 37:

.. code-block:: bash

    sudo dnf install libmicrohttpd libmicrohttpd-devel libsq3 libsq3-devel libarchive libarchive-devel gettext-devel

Dependencies for Ubuntu 22.04:

.. code-block:: bash

    sudo apt install libarchive-dev libsqlite3-dev libmicrohttpd-dev

Build and install:

.. code-block:: bash

    git clone https://sourceware.org/git/elfutils.git
    cd elfutils
    git checkout elfutils-0.189
    autoreconf -fi
    ./configure --prefix=/tools/elfutils --enable-maintainer-mode
    make
    make install

Configure your environment:

.. code-block:: bash

    export PATH=/tools/elfutils/bin:$PATH
    export LD_LIBRARY_PATH=/tools/elfutils/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}

.. _build-pahole:

Build and Install ``pahole``
----------------------------

.. warning::

    We use here 1.23 version of Pahole because of this commit in the latest version:
    
      https://git.kernel.org/pub/scm/devel/pahole/pahole.git/commit/?id=9712d9ec929fb6b3595d2970bbbac8b0b1c10ead

    It leads to generating BTF information for 64-bit enumerations. However, Linux kernels below 6.0 version
    contain tools which don't support such BTF structures and crash while building the kernel. 

Dependencies for Ubuntu 22.04:

.. code-block:: bash

    sudo apt install libdw-dev

.. code-block:: bash

    git clone -b v1.23 https://git.kernel.org/pub/scm/devel/pahole/pahole.git
    mkdir pahole/build
    cd pahole/build
    cmake -D__LIB=lib -DCMAKE_INSTALL_PREFIX=/tools/pahole ..
    make
    make install

Configure your environment:

.. code-block:: bash

    export PATH=/tools/pahole/bin:$PATH
    export LD_LIBRARY_PATH=/tools/pahole/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}

Build and Install ``bpftool``
-----------------------------

.. code-block:: bash

    git clone --recurse-submodules https://github.com/libbpf/bpftool.git
    cd src
    make prefix=/tools/bpftool install-bin
