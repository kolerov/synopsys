.. highlight:: text

WSL
===

Install Ubuntu
--------------

Install the latest Ubuntu::

    wsl --install -d Ubuntu
    wsl --set-default-version 2

For restricting consumption of memory create ``.wslconfig`` in User's directory:

.. code-block:: toml

    [wsl2]
    memory=8GB

Install ``wsl-vpnkit``
----------------------

Install wsl-vpnkit to avoid problems related to corporate VPN. This tool may
be found in https://github.com/sakai135/wsl-vpnkit. Download the prebuilt
file ``wsl-vpnkit.tar.gz`` from the latest release and import the distro into
WSL 2. Running the distro will show a short intro and exit.

.. code-block:: text

    wsl --import wsl-vpnkit --version 2 $env:USERPROFILE\wsl-vpnkit wsl-vpnkit.tar.gz
    wsl -d wsl-vpnkit

Add the command to your ``.profile`` or ``.bashrc`` to start ``wsl-vpnkit``
when you open your WSL terminal.

.. code-block:: text

    wsl.exe -d wsl-vpnkit --cd /app service wsl-vpnkit start

Configure DNS resolving for VPN
-------------------------------

Create ``/etc/wsl.conf``:

.. code-block:: toml

    [network]
    generateResolvConf = false

Reboot WSL and create ``/etc/resolv.conf``::

    nameserver 10.228.0.1
    nameserver 10.228.0.2
    search internal.synopsys.com
    nameserver 1.1.1.1

Shrink virtual disk's space
---------------------------

Shrink virtual disk's space when it's necessary. Follow instructions
from https://stephenreescarter.net/how-to-shrink-a-wsl2-virtual-disk/.
Example::

    PS C:\Users\ykolerov> wsl --terminate Ubuntu
    PS C:\Users\ykolerov> diskpart

    Microsoft DiskPart version 10.0.19041.964

    Copyright (C) Microsoft Corporation.
    On computer: SNPS-RDN8FHBSCC

    DISKPART> select vdisk file="C:\Users\ykolerov\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc\LocalState\ext4.vhdx"

    DiskPart successfully selected the virtual disk file.

    DISKPART> compact vdisk

    100 percent completed

    DiskPart successfully compacted the virtual disk file.

Sometimes it's better to reboot laptop before doing those steps so you
can be sure that a virtual disk is note used.

Build and install a custom kernel
---------------------------------

In Ubuntu/WSL:

.. code-block:: bash

    sudo apt install build-essential flex bison libssl-dev libelf-dev git dwarves bc
    git clone https://github.com/microsoft/WSL2-Linux-Kernel.git
    cd WSL2-Linux-Kernel
    cp Microsoft/config-wsl .config
    make -j $(expr $(nproc) - 1)
    cp arch/x86/boot/bzImage /mnt/c/Users/ykolerov/bzImage

Create the file ``%userprofile%\.wslconfig`` that contains:

.. code-block:: toml

    [wsl2]
    kernel="C:\\Users\\ykolerov\\bzImage"

In PowerShell, run ``wsl --shutdown``. Details mey be found here:
https://unix.stackexchange.com/questions/594470/wsl-2-does-not-have-lib-modules.