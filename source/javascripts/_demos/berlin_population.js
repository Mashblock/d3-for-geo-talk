let d3 = require("d3");

class BerlinPopulation {
  static draw(el) {
    var instance = new BerlinPopulation(el);
    instance.fetch().then(()=> instance.render())
  }

  constructor(el) {
    this.svg = d3.select(el).append("svg").attr("width", 300).attr("height", 300);;
    this.colorScale = d3.scaleQuantile().range(["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"]);
  }

  fetch(){
    return new Promise((resolve, reject)=> {
      d3.json("data/berlin_population.geojson", (error, data)=>{
        if (error) return reject(data);
        this.geojson = data;
        resolve();
      });
    });
  }

  render() {
    var projection = d3.geoMercator()
      .fitSize([300, 300], this.geojson);
    var path = d3.geoPath().projection(projection);

    this.colorScale.domain(this.geojson.features.map((d)=> d.properties.population_total))

    var neighborhoods = this.svg.selectAll("path.land").data(this.geojson.features);
    neighborhoods.enter().append("path")
      .attr("class", "land")
      .attr("d", path)
      .attr("fill", (d)=> this.colorScale(d.properties.population_total))
      .append("title").text((d)=> `${d.properties.name} - ${d.properties.population_total}`);     
  }
}

module.exports = BerlinPopulation;
