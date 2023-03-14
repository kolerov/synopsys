GCC
===

Using ``-frecord-gcc-switches``
-------------------------------

gcc has a ``-frecord-gcc-switches`` option for that:

.. code-block:: text

   -frecord-gcc-switches
       This switch causes the command line that was used to invoke the compiler to
       be recorded into the object file that is being created.  This switch is only
       implemented on some targets and the exact format of the recording is target
       and binary file format dependent, but it usually takes the form of a section
       containing ASCII text.

Afterwards, the ELF executables will contain .GCC.command.line section with that information.

.. code-block:: text

    $ gcc -O2 -frecord-gcc-switches a.c
    $ readelf -p .GCC.command.line a.out 

    String dump of section '.GCC.command.line':
    [     0]  a.c
    [     4]  -mtune=generic
    [    13]  -march=x86-64
    [    21]  -O2
    [    25]  -frecord-gcc-switches

Show status of target options
-----------------------------

.. code-block:: text

    $ gcc -Q --help=target

