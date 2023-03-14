GDB
===

Run commands while starting::

    $ arc-elf32-gdb -ex "target remote :1234" -ex "load" main.elf

Display the disassembly of the next instruction every time GDB stops::

    (gdb) display/i $pc

Show 10 instructions next to `pc`::

    (gdb) x/10i $pc
