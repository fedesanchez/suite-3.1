.. _geoexplorer.using.add:


Add layers
==========


When the GeoExplorer application is started, the :guilabel:`Overlays` folder is initially empty, so the first step is to add layers.

.. |addlayer| image:: ../images/button_addlayer.png 
              :align: bottom

#. Click :guilabel:`Add Layers` |addlayer| on the :ref:`geoexplorer.workspace.layerstoolbar` and click :guilabel:`Add layers` to display the :guilabel:`Available Layers` panel and a list of available layers.

   .. figure:: images/addlayers.png

      *Add Layers tool*

   .. figure:: images/panel_availablelayers.png

      *Available Layers panel*

   The :guilabel:`Available Layers` panel list will default to the list of layers published by your local GeoServer instance. For each layer, the :guilabel:`Title` and :guilabel:`Id` are displayed.

   .. note:: If you are running GeoExplorer as a standalone module, the :guilabel:`Available Layers` panel will display layers from a remote GeoServer. 

#. To see a layer :guilabel:`Abstract` (summary), expand the list entry for the selected layer.

   .. figure:: images/add_abstract.png

      *Displaying the Abstract for a layer*

   .. note:: You can upload your own data directly through this panel. See the :ref:`geoexplorer.using.upload` section to learn more.

#. To select a layer, click the required list entry. To add multiple layers, hold down Ctrl while you click all the layers you want to add.

#. Click the :guilabel:`Add Layers` button at the bottom of the :guilabel:`Available Layers` panel to add the selected layers to the Map Window.

   .. note:: You can also add a new layer by double-clicking a layer in the :guilabel:`Available Layers` panel.

#. Click :guilabel:`Done` when you've finished adding layers. You will see your layers in the :guilabel:`Overlays` folder in the :ref:`geoexplorer.workspace.layerspanel`.

   .. figure:: images/add_layersadded.png

      *Layers added to the Layer panel*

   The :ref:`geoexplorer.workspace.mapwindow` will automatically zoom to the extent of your new layer. 

Default servers
---------------

GeoExplorer provides access to a number of servers, each with their own list of layers.

.. list-table::
       :header-rows: 1
       :widths: 20 40 40 

       * - Server Name
         - Description
         - Notes
       * - **Local GeoServer**
         - Local GeoServer WMS if present on the same server as GeoExplorer
         - Not available when using the standalone version of GeoExplorer
       * - **Remote Suite GeoServer**
         - GeoServer WMS on OpenGeo's servers
         - GeoServer URL is: ``http://v2.suite.opengeo.org/geoserver/``
       * - **MapQuest Layers**
         - Layers published through `MapQuest <http://www.mapquest.com>`_
         - Available layers: 
             * :guilabel:`MapQuest OpenStreetMap`
             * :guilabel:`MapQuest Imagery`
       * - **OpenStreetMap Layers**
         - Layers published through `OpenStreetMap <http://www.openstreetmap.org>`_
         - Available layers: 
             * :guilabel:`Mapnik`
       * - **Google Layers**
         - Layers published through `Google Maps <http://maps.google.com>`_
         - Available layers: 
             * :guilabel:`Google Roadmap`
             * :guilabel:`Google Satellite`
             * :guilabel:`Google Hybrid`
             * :guilabel:`Google Terrain`
       * - **Bing Layers**
         - Layers published through `Bing Maps <http://www.bing.com/maps>`_
         - Available layers: 
             * :guilabel:`Bing Roads`
             * :guilabel:`Bing Aerial`
             * :guilabel:`Bing Aerial With Labels`
       * - **MapBox Layers**
         - Layers published through `MapBox <http://mapbox.com>`_
         - A number of layers are available, including Blue Marble Topography, Natural Earth imagery, and stylized base layers like Geography Class.


To add layers from one of these servers, click the new server in the :guilabel:`View available data from` list and select the required layer from the updated :guilabel:`Available Layers` panel.

.. figure:: images/add_availableserverlayers.png

   *Other server layers*


Connect to another WMS
----------------------

To load layers from a server not currently listed, you must add the server to the list of available servers. You can add any valid :term:`WMS`.

To add a new server, click :guilabel:`Add a New Server` in the :guilabel:`View available data from` list in the :guilabel:`Available Layers` panel to display the :guilabel:`Add New Server` panel. 

.. figure:: images/add_newserver.png

   *Adding a new WMS server*

.. figure:: images/add_url.png

   *Adding a URL*   

Enter the required WMS service endpoint URL in the :guilabel:`URL` box. For example:: 

  http://suite.opengeo.org/geoserver/wms


Once the server has been added to the list, any layers published by that server can be added to GeoExplorer.
