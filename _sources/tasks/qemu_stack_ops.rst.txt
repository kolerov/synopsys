🟡 Some stack operations are not presented in QEMU
==================================================

Consider this example ``main.c``:

.. code-block:: c

    #include <stdio.h>

    int f(int a, int b)
    {
        return a + b;
    }

    int main()
    {
        int c = f(4, 5);
        printf("%d", c);
        return 0;
    }

Compile this code for HS 4x and HS 5x using both GCC and MWDT:

.. code-block:: shell

    ccac -av2hs -g -c main.c -o main-ccac-hs4x.o
    ccac -av3hs -g -c main.c -o main-ccac-hs5x.o
    arc-elf32-gcc -mcpu=archs -g -c main.c -o main-gcc-hs4x.o
    arc64-elf-gcc -mcpu=hs5x -g -c main.c -o main-gcc-hs5x.o

Then you can find that objdump cannot recognize it:

.. code-block:: text

    $ arc64-elf-objdump -d main-ccac-hs5x.o

    main-ccac-hs5x.o:     file format elf32-littlearc64
    …
    00000004 <main>:
    4:   c0f1                    .shor   0xc0f1
    6:   740c                    mov_s   r0,4
    8:   752c                    mov_s   r1,5

``c0f1`` is exactly ``push_s blink``. Also, ``qemu-system-arc64`` crashes on this opcode. GDB does not
recognize this opcode too.
