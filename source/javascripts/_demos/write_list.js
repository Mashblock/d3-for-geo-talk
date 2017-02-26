let d3 = require("d3");

let writeList = function(list){
  var ul = d3.select("ul.list");

  var items = ul.selectAll("li").data(list);

  // Add new elements.
  items.enter().append("li")
    .text(function(item) { return item; });

  // Remove any old elements.
  items.exit().remove();

  // Update existing elements.
  items.text(function(item) { return item; });
}

module.exports = writeList;
