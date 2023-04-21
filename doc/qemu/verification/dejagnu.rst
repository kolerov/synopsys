DejaGnu tests
=============

Prepare a build environment::

    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/arc-gnu-toolchain
    cd arc-gnu-toolchain
    git clone https://github.com/foss-for-synopsys-dwc-arc-processors/toolchain

Create ``site.exp`` in a separate directory

.. code-block:: tcl

    set tool qemu
    set srcdir "$env(COMPSRC)/test-qemu/qemu/testsuite/"
    set objdir ./
    set tmpdir ./tmp/
    set target_alias arc-elf32
    set target_triplet arc-unknown-elf32
    set arc_board_dir "$env(COMPSRC)/toolchain"
    set qemu_serial_io 1

    if ![info exists boards_dir] {
        set boards_dir {}
    }
    lappend boards_dir "$arc_board_dir/dejagnu"
    lappend boards_dir "$arc_board_dir/dejagnu/baseboards"

    verbose "Global Config File: target_triplet is $target_triplet" 2

    set target_list "arc-sim-qemu"

    set verbose 0

Create ``test.sh`` script for running tests:

.. code-block:: bash

    #!/bin/bash
    export COMPSRC=/home/ykolerov/workspace/arc-gnu-toolchain
    runtest
