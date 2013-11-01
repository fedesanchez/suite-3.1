.. _installation.linux.ubuntu.geoserver:

Installing GeoServer on Ubuntu
==============================

The easiest way to install and set up GeoServer is by :ref:`installing the full OpenGeo Suite <installation.linux.ubuntu.suite>`.  The OpenGeo Suite comes complete with GeoServer as well as a full geospatial software stack, including utilities, data, and documentation.  That said, OpenGeo also provides individual packages for installing the components separately.

This page will describe how to install GeoServer on Ubuntu 10.04 (Lucid).  Later versions may work as well, but are not well-tested at this time.


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

Now you can install GeoServer.  The name of the package is :guilabel:`opengeo-geoserver`:

.. code-block:: bash

   apt-get install opengeo-geoserver


After installation
------------------

When completed, GeoServer will be installed as a servlet inside the local version of Tomcat.  Assuming that Tomcat is running on the default port 8080, you can verify that GeoServer is installed by navigating to the following URL::

   http://localhost:8080/geoserver/

This will load the Web Administration Interface.  Most management of GeoServer functionality can be done from this interface.

.. note:: The default username and password for the GeoServer administrator account is **admin** / **geoserver**

For more information about GeoServer, please see the `GeoServer Documentation <http://suite.opengeo.org/opengeo-docs/geoserver/>`_

Upgrading   
---------

See :ref:`Upgrading the OpenGeo Suite <installation.linux.ubuntu.suite.upgrade>` for general information about upgrading. In particular users who wish to upgrade to GeoServer 2.2 should follow the steps outlined in :ref:`installation.linux.ubuntu.suite.upgrade.v3`.
