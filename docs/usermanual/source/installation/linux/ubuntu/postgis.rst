.. _installation.linux.ubuntu.postgis:

Installing PostGIS on Ubuntu
============================

The easiest way to install and set up PostGIS is by :ref:`installing the full OpenGeo Suite <installation.linux.ubuntu.suite>`.  The OpenGeo Suite comes complete with PostGIS as well as a full geospatial software stack, including utilities, data, and documentation.  That said, OpenGeo also provides individual packages for installing the components separately.

This page will describe how to install PostGIS on Ubuntu 10.04 (Lucid).  Later versions may work as well, but are not well-tested at this time.


Access the OpenGeo repository
-----------------------------

OpenGeo provides a repository for packages in APT (Debian/Ubuntu) format.  To access this repository, you need to first import the OpenGeo GPG key in to your apt registry:

.. note:: You will need to run these commands on an account with root access.

.. code-block:: bash

   wget -qO- http://apt.opengeo.org/gpg.key | apt-key add -

Once added, you can add the OpenGeo APT repository (http://apt.opengeo.org) to your local list of repositories:

.. code-block:: bash

   echo "deb http://apt.opengeo.org/suite/v3/ubuntu lucid main" >> /etc/apt/sources.list
      
Now update APT to pull in your changes:

.. code-block:: bash

   apt-get update

Search for packages from OpenGeo:

.. code-block:: bash

   apt-cache search opengeo

If the search command does not return any results, the repository was not added properly. Examine the output of the ``apt`` commands for any errors or warnings.

Package management
------------------

Now you can install PostGIS.  The name of the package is :guilabel:`opengeo-postgis`:

.. code-block:: bash

   apt-get install opengeo-postgis


After installation
------------------

When completed, PostGIS will be installed on your system as a service, running on port **5432**.  

.. note:: During installation a PostgreSQL user account named **opengeo** (password **opengeo**) will be created.

To verify that PostGIS is installed properly, you can run the following command in a terminal (you will be prompted for a password):

.. code-block:: bash

   $ psql -U opengeo -p 5432 -c "SELECT postgis_full_version();" medford

If PostGIS is installed correctly, you should see information about the installed database.

Upgrading
---------

See :ref:`Upgrading the OpenGeo Suite <installation.linux.ubuntu.suite.upgrade>` for general information about upgrading. In particular users who wish to upgrade to PostGIS 2.0 should follow the steps outlined in :ref:`installation.linux.ubuntu.suite.upgrade.v3`.
