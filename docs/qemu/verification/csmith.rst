Verification by generating random programs
==========================================

From ``csmith``'s page (https://embed.cs.utah.edu/csmith/):

  Csmith is a tool that can generate random C programs that statically and dynamically
  conform to the C99 standard. It is useful for stress-testing compilers, static analyzers,
  and other tools that process C code. Csmith has found bugs in every tool that it has
  tested, and we have used it to find and report more than 400 previously unknown compiler bugs.

You can generate a test using this command:

.. code-block:: shell

    csmith --no-argc --divs --float > test.c

To find another useful options run ``csmith -h`` or ``csmith -hh``.
