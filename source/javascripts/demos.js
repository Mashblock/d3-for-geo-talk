let NZMap = require('./demos/nz_map'),
    BerlinDemo = require('./demos/berlin'),
    PointsLinearDemo = require('./demos/points_linear'),
    PointsProjectionDemo = require('./demos/points_projection'),
    PopulationDemo = require("./demos/berlin_population");

window.writeList = require("./demos/write_list");

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
