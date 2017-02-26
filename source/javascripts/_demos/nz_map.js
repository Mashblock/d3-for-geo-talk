let d3 = require('d3'),
    topojson = require('topojson');

class NZMap {
  static draw(el){
    let instance = new NZMap(el);
    instance.fetch().then(()=> instance.render());
  }
  
  constructor(el) {
    this.geojson = {};
    this.svg = d3.select(el).append("svg")
      .attr("width", 300).attr("height", 300);
  }

  fetch() {
    return new Promise((resolve, reject)=>{
      d3.json("/data/nz-coastline.topojson", (error, data)=>{
        if (error) return reject(error);
        this.geojson = topojson.feature(data, data.objects["nz-coastline"]);
        resolve();
      });
    });
  }

  render() {
    var projection = d3.geoMercator()
      .fitSize([300, 300], this.geojson);

    var path = d3.geoPath().projection(projection);
    
    this.svg.insert("path", ".graticule")
      .datum(this.geojson)
      .attr("class", "land")
      .attr("d", path);
  }
}

module.exports = NZMap;
