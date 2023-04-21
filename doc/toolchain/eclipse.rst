Eclipse Plugin
==============

Build using Maven
-----------------

Firstly, you need to download these tools:

1. Maven 3.5.4:
   
   https://dlcdn.apache.org/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz
   
2. JDK 11:
   
   https://www.oracle.com/eg/java/technologies/javase/jdk11-archive-downloads.html

3. Eclipse 2020.03 with CDT:
   
   https://www.eclipse.org/downloads/packages/release/2020-03/r/eclipse-ide-cc-developers-includes-incubating-components

4. Plugin for Eclipse:
   
   https://github.com/foss-for-synopsys-dwc-arc-processors/arc_gnu_eclipse

Extract Maven, JDK and Eclipse to any directory. Let's name it ``eclipse``. Create
a directory ``repository`` to save downloaded dependencies for later use. Also clone the repository
to the same directory. Then use these commands (change path to ``eclipse`` and JDK directory name to yours):

.. code-block:: bash

    ECLIPSE=/home/ykolerov/tasks/eclipse
    MAVEN=$ECLIPSE/apache-maven-3.5.4/bin/mvn
    REPOSITORY=$ECLIPSE/repository
    export JAVA_HOME=$ECLIPSE/jdk-11.0.17
    export PATH=$JAVA_HOME/bin:$PATH
    $MAVEN -Dmaven.repo.local=$REPOSITORY clean install

After that an archive with plugin will be generate::

    arc_gnu_eclipse/repository/target/repository-2019.9.0-SNAPSHOT.zip

Install the plugin:

.. code-block:: bash

    unzip arc_gnu_eclipse/repository/target/repository-2019.9.0-SNAPSHOT.zip -d eclipse-2020-03/dropins
    rm -f eclipse-2020-03/dropins/artifacts.jar
	rm -f eclipse-2020-03/dropins/content.jar
    echo "-Dosgi.instance.area.default=@user.home/ARC_GNU_IDE_Workspace" >> eclipse-2020-03/eclipse.ini

Build and Debug Using Eclipse PDT
---------------------------------

