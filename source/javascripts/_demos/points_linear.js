let d3 = require('d3');

class PointsLinear {
  static draw(el) {
    new PointsLinear(el).render();
  }

  constructor(el) {
    this.svg = d3.select(el).append("svg").attr("width", 300).attr("height", 300);
  }

  render(){
    var points = [[52.529911, 13.410728], [52.526772, 13.407635], 
                  [52.524434, 13.406601], [52.501944, 13.431986], 
                  [52.500799, 13.419489], [52.529528, 13.401792]];
    
    var xScale = d3.scaleLinear()
      .domain([13.40, 13.44])
      .range([5, 295]);
    var yScale = d3.scaleLinear()
      .domain([52.50, 52.54])
      .range([295, 5]);

    var points = this.svg.selectAll("circle.point")
      .data(points);

    points.enter().append("circle")
      .attr("class", "point")
      .attr("r", 5)
      .attr("cx", (d)=> xScale(d[1]))
      .attr("cy", (d)=> yScale(d[0]));
  }
}

module.exports = PointsLinear;
