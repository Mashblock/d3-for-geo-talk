let NZMap = require('./_demos/nz_map'),
    BerlinDemo = require('./_demos/berlin'),
    PointsLinearDemo = require('./_demos/points_linear'),
    PointsProjectionDemo = require('./_demos/points_projection'),
    PopulationDemo = require("./_demos/berlin_population");

window.writeList = require("./_demos/write_list");

module.exports = {
  start: function(){
    NZMap.draw(document.getElementById("nz_map_demo"));
    BerlinDemo.draw(document.getElementById("berlin_demo"));
    PointsLinearDemo.draw(document.getElementById("points_demo"));
    PointsProjectionDemo.draw(document.getElementById("points_projection_demo"));
    PopulationDemo.draw(document.getElementById("population_demo"));
    writeList(["Woof!", "Baa!", "Meow!"]);
  }
}
