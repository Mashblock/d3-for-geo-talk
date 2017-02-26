let d3 = require("d3");

class PointsProjection {
  static draw(el) {
    var instance = new PointsProjection(el);
    instance.fetch().then(()=> instance.render());
  }

  constructor(el) {
    var svg = d3.select(el).append("svg")
      .attr("width", 300).attr("height", 300);
    this.paper = svg.append("g").attr("transform", "translate(10, 10)")
  }

  fetch() {
    return new Promise((resolve, reject)=> {
      d3.json("/data/cafes.geojson", (error, data)=>{
        if (error) return reject(error);
        this.geojson = data;
        resolve();
      });
    });
  }

  render() {
    var projection = d3.geoMercator()
      .fitSize([280, 280], this.geojson);
    var path = d3.geoPath().projection(projection);

    var points = this.paper.selectAll("path.point") 
      .data(this.geojson.features);

    points.enter().append("path")
      .attr("class", "point")
      .attr("d", path);
  }
}

module.exports = PointsProjection;
