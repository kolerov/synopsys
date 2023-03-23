Git
===

Compare branches
-----------------

.. code-block:: shell

    git log --oneline --graph --decorate --abbrev-commit  v5.18..synopsys/shahab-bpf-jit


Create a branch from remote
---------------------------

``git switch`` was added in Git 2.23:

.. code-block:: shell

    git switch -c test origin/test

Prior to this ``git checkout`` was used to switch branches:

.. code-block:: shell

    git checkout -b test origin/test

Bisect code
-----------

As an example, suppose you are trying to find the commit that broke a feature
that was known to work in version `v2.6.13-rc2`` of your project. You start a
bisect session as follows:

.. code-block:: bash

    git bisect start
    git bisect bad                 # Current version is bad
    git bisect good v2.6.13-rc2    # v2.6.13-rc2 is known to be good

See details here: https://git-scm.com/docs/git-bisect.
