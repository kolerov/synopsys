Configuring Guest Linux for VirtualBox
======================================

All Linux Distributions
-----------------------

After installing Guest Additions add your user to ``vboxsf`` group:

.. code-block:: bash

    sudo usermod -aG vboxsf ykolerov

CentOS 7
--------

Enable EPEL repository and update:

.. code-block:: bash

    yum -y install epel-release
    yum -y update

Install packages for VirtualBox Guest Additions:

.. code-block:: bash

    yum install make gcc kernel-headers kernel-devel perl dkms bzip2

Then you can attach a virtual CD with Guest Additions and install it manually.

Ubuntu 22.04
------------

Install VirtualBox Guest Additions:

.. code-block:: bash

    sudo add-apt-repository multiverse
    sudo apt update
    sudo apt install virtualbox-guest-utils virtualbox-guest-x11
