let d3 = require('d3'),
    scales = require('d3-scale-chromatic');

class Berlin {
  static draw(el){
    let instance = new Berlin(el);
    instance.fetch().then(()=> instance.render());
  }
  
  constructor(el) {
    this.svg = d3.select(el).append("svg").attr("width", 300).attr("height", 300);
    this.colorScale = d3.scaleOrdinal(scales.schemeSet1); 
  }

  fetch(){
    return new Promise((resolve, reject)=> {
      d3.json("data/berlin_population.geojson", (error, data)=>{
        if (error) return reject(data);
        this.geojson = data;
        resolve();
      })
    });
  }

  render() {
    var projection = d3.geoMercator()
      .fitSize([300, 300], this.geojson);
    var path = d3.geoPath().projection(projection);

    var neighborhoods = this.svg.selectAll("path.land").data(this.geojson.features);
    neighborhoods.enter().append("path")
      .attr("class", "land")
      .attr("d", path);     
  }
}

module.exports = Berlin;
