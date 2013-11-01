var Process = require("geoscript/process").Process;
var {Feature, FeatureCollection, Schema} = require("geoscript/feature");

exports.process = new Process({

  title: "Distance and Bearing",
  description: "Computes Cartesian distance and bearing from features to an origin.",

  inputs: {
    origin: {
      type: "Point",
      title: "Origin",
      description: "The origin from which to calculate distance and bearing."
    },
    features: {
      type: "FeatureCollection",
      title: "Features",
      description: "The features to which distance and bearing should be calculated."
    }
  },

  outputs: {
    result: {
      type: "FeatureCollection",
      title: "Resulting Features",
      description: "Features with calculated distance and bearing attributes."
      }
  },

  run: function(inputs) {
    var origin = inputs.origin;
    var geomField = inputs.features.schema.geometry;

    var schema = new Schema({
      name: "result",
      fields: [
        {name: "geometry", type: geomField.type, projection: geomField.projection},
        {name: "distance", type: "Double"},
        {name: "bearing", type: "Double"}
      ]
    });

    var collection = new FeatureCollection({
      features: function() {
        for (var feature in inputs.features) {

          var p = feature.geometry.centroid;
          var d = origin.distance(p);
          var b = (90 - Math.atan2(p.y - origin.y, p.x - origin.x) * 180 / Math.PI) % 360;

          yield new Feature({
            schema: schema,
            properties: {
              geometry: feature.geometry,
              distance: d,
              bearing: b
            }
          });
        }
      }
    });

    return {result: collection};
  }

});