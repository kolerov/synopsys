🟢 ``.file`` directive does not work as intended
================================================

The Problem
-----------

Issue is initially described on GitHub: https://github.com/foss-for-synopsys-dwc-arc-processors/toolchain/issues/344

But then it turned out that ``.file`` is processed differently depending on the
contents of the ``.S`` file. Seems like it's a consequence of a memory leakage somewhere
in assembler.

Reproduce
---------

.. code-block:: gas
    :caption: good.s

    # 1 "good.S"
    # 1 "<built-in>"
    # 1 "<command-line>"
    # 1 "good.S"
    .file "this_name_must_be_in_debug"
    .text







    nop

.. code-block:: gas
    :caption: bad.s

    # 1 "bad.s"
    # 1 "<built-in>"
    # 1 "<command-line>"
    # 1 "bad.s"
    .file "this_name_must_be_in_debug"
    .text
    # 11 "bad.s"
    nop

.. code-block:: text
    :caption: Command line

    $ arc-elf32-gcc -mcpu=archs -g -O0 -c good.s -o good.o
    $ arc-elf32-objdump -Wi good.o | grep "DW_AT_name"
    <16>   DW_AT_name        : (indirect string, offset: 0x0): this_name_must_be_in_debug
    $ arc-elf32-gcc -mcpu=archs -g -O0 -c bad.s -o bad.o
    $ arc-elf32-objdump -Wi bad.o | grep "DW_AT_name"
    <16>   DW_AT_name        : (indirect string, offset: 0x0): bad.s

Solution
--------

``.S`` is a format for assembler + macros (unlike ``.s`` - it's for poor assembler).
If you put such file to ``arc-elf32-gcc -E`` then it will be preprocessed and GCC will
expand all macros. Consider this ``example.S`` source file:

.. code-block:: gas

    .file "hello"
    .text








    nop

    nop

After this command line

.. code-block:: text

    $ arc-elf32-gcc -mcpu=archs -g -gdwarf-5 -E example.S -o example.s


we will get this ``example.s``:

.. code-block:: gas

    # 0 "example.S"
    # 1 "/home/ykolerov/workspace/task_arc64_dwarf/as//"
    # 0 "<built-in>"
    # 0 "<command-line>"
    # 1 "example.S"
    .file "hello"
    .text
    # 11 "example.S"
    nop

    nop

GCC adds extra information for assembler like ``# <n> <file>`` lines. Also GCC shrinks ``.S`` file to
make it more compact (if gaps are too big) and also adds these lines for assembler to make him know
that a gap exists: "skip ``<n>`` line in ``<file>`` and put this information to ``.debug_line``". Then
``arc-elf32-as`` always overwrites filename symbol if it meets a line number comment (``# <n> <file>``).
I think it's described here: https://github.com/foss-for-synopsys-dwc-arc-processors/binutils-gdb/blob/arc-2022.09/gas/dwarf2dbg.c#L2812.
Filename is overwritten even if you define it manually using ``.file``.

``.file`` has no sense if it used in ``.S`` file manually - it maybe overwritten by assembler after preprocessing stage.
Also, it happens on every platform (e.g. Intel). On the other side, when you compile ``.c`` files you can see that GCC
generates ``.file`` with the same name as in ``# <n> <file>`` after preprocessing. Intel and ARM don't use ``.file``
in there ``.S`` files in Newlib.

So, the question is: "Why ``.file`` even exists if it's always overwritten?" Actually, it's used properly whet it's
generated by the compiler with a valid name. If assembler cannot find a line with filename then the name from ``.file`` is used.

Thus, the easiest way to prevent the issue is just remove all ``.file`` directives:

1. Because they are useless in such context and lead to an undefined behavior like this issue.
2. Compiler does not need help in finding the filename.
