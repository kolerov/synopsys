.. highlight:: text

WSL
===

Install Ubuntu
--------------

Install the latest Ubuntu::

    wsl --install -d Ubuntu
    wsl --set-default-version 2

Install Fedora
--------------

Download an image from https://github.com/fedora-cloud/docker-brew-fedora/tree/37/x86_64.
Unpack it to ``fedora-37-x86_64.tar``. Place it to user's home directory. Install it::

	mkdir $HOME\wsl\Fedora
	wsl --import Fedora $HOME\wsl\Fedora $HOME\fedora-37-x86_64.tar

Install `systemd` and basic packages before any changes in ``/etc/wsl.conf``:

.. code-block:: bash

	dnf install systemd util-linux passwd

Add user:

.. code-block:: bash

    useradd -s /bin/bash -m -c "Yuriy Kolerov" ykolerov
	passwd ykolerov

Set this user as default in ``/etc/wsl.conf``:

.. code-block:: toml

	[user]
	default=ykolerov

Install ``wsl-vpnkit``
----------------------

Install ``wsl-vpnkit`` to avoid problems related to corporate VPN.
This tool may be found in https://github.com/sakai135/wsl-vpnkit.
Download the prebuilt file ``wsl-vpnkit.tar.gz`` from the latest release
and import the distro into WSL 2. Running the distro will show a short
intro and exit.

.. code-block:: text

	wsl --import wsl-vpnkit --version 2 $env:USERPROFILE\wsl-vpnkit wsl-vpnkit.tar.gz
	wsl -d wsl-vpnkit

Add the command to your ``.profile`` to start ``wsl-vpnkit`` when you
open the WSL terminal:

.. code-block:: bash

	if [[ -z $(wsl.exe -d wsl-vpnkit --cd /app ps | grep wsl-vm) ]]; then
		wsl.exe -d wsl-vpnkit --cd /app service wsl-vpnkit start
	fi

Configure WSL
-------------

Create `.wslconfig` in `$USER`:

.. code-block:: toml

    [wsl2]
    memory=8GB
    processors=4

Create ``/etc/wsl.conf`` on target:

.. code-block:: toml

    [boot]
    systemd=true

    [network]
    generateResolvConf=false

Reboot WSL and create ``/etc/resolv.conf``::

	nameserver <your-company-DNS>
	search <you-company-internal-resource>
	nameserver 1.1.1.1

Build and Install the Linux Kernel 6.1
--------------------------------------

Dependencies for Ubuntu 22.04:

.. code-block:: bash

    sudo apt install build-essential flex bison libssl-dev libelf-dev git dwarves bc

Download and install the latest kernel:

.. code-block:: bash

    git clone https://github.com/microsoft/WSL2-Linux-Kernel.git
    cd WSL2-Linux-Kernel
    git checkout linux-msft-wsl-6.1.21.1
    make -j $(nproc) KCONFIG_CONFIG=Microsoft/config-wsl
    cp arch/x86/boot/bzImage /mnt/c/Users/ykolerov/bzImage-6.1

Add this configuration to ``.wslconfig``:

.. code-block:: toml

    [wsl2]
    kernel="C:\\Users\\ykolerov\\bzImage-6.1"

Configuration Files
-------------------

This is how ``/etc/wsl.conf`` looks like now:

.. code-block:: toml

    [boot]
    systemd=true

    [network]
    generateResolvConf=false

This is how ``$env:HOMEPATH\.wslconfig`` looks like now:

.. code-block:: toml

    [wsl2]
    memory=10GB
    kernel="C:\\Users\\ykolerov\\bzImage-6.1"

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
