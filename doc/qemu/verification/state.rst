Verification by comparing states
================================

Compile an example
------------------

Create ``main.c`` file with this content:

.. code-block:: c

    #include <stdio.h>

    int main()
    {
            printf("Hello, World!\n");
            return 0;
    }

Compile it for ARC HS:

.. code-block:: shell

    arc-elf32-gcc -g -O0 -mcpu=archs -specs=nsim.specs main.c -o main.elf


Run a GDB server
----------------

Run GDB server using nSIM:

.. code-block:: shell

    nsimdrv -tcf $NSIM_HOME/etc/tcf/templates/hs48_full.tcf -on nsim_emt -gdb -port 1234


Run GDB server using QEMU:

.. code-block:: shell

    qemu-system-arc -monitor none -display none -M arc-sim -cpu archs -m 1G -nographic -no-reboot -serial stdio -s -S -kernel main.elf

Run a GDB client
----------------

Create a script for a GDB client:

.. code-block:: text

    set width 0
    set height 0
    set verbose off

    define hook-quit
        set confirm off
    end

    target remote :1234
    load
    b main
    continue
    set logging overwrite on
    set logging file registers.txt
    set logging enabled on
    i r
    set logging enabled off
    quit

Run a GDB client:

.. code-block:: shell

    arc-elf32-gdb --batch --command=test.gdb main.elf
