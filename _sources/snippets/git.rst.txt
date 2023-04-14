Git
===

Compare Branches
-----------------

.. code-block:: shell

    git log --oneline --graph --decorate --abbrev-commit  v5.18..synopsys/shahab-bpf-jit


Create a Branch from Remote
---------------------------

``git switch`` was added in Git 2.23:

.. code-block:: shell

    git switch -c test origin/test

Prior to this ``git checkout`` was used to switch branches:

.. code-block:: shell

    git checkout -b test origin/test

Bisect Code
-----------

As an example, suppose you are trying to find the commit that broke a feature
that was known to work in version `v2.6.13-rc2`` of your project. You start a
bisect session as follows:

.. code-block:: bash

    git bisect start
    git bisect bad                 # Current version is bad
    git bisect good v2.6.13-rc2    # v2.6.13-rc2 is known to be good

See details here:

* https://git-scm.com/docs/git-bisect

How to Delete a Git Branch Both Locally and Remotely
----------------------------------------------------

.. code-block:: bash

    # The -d option will delete the branch only if it has
    # already been pushed and merged with the remote branch. 
    git branch -d localBranchName

    # Use -D instead if you want to force the branch to be
    # deleted, even if it hasn't been pushed or merged yet.
    git branch -D localBranchName

    # Delete branch remotely.
    git push origin --delete remoteBranchName

    # Try to synchronize your branch list using -p. The -p
    # flag means "prune". After fetching, branches which no
    # longer exist on the remote will be deleted.
    git fetch -p

See details here:

* https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/
