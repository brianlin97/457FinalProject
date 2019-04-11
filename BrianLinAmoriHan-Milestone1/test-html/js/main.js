// The function is called every time when an order comes in or an order gets processed
// The current order queue is stored in the variable 'orders'

// The function is called every time when an life comes in or an life gets processed
// The current life queue is stored in the variable 'orders'
var width = 1000;
var height = 500;

var svg = d3.select("#life-map").append("svg")
.attr("width",width)
.attr("height",height);

// draw U.S. map

var projection = d3.geoAlbersUsa()
                   .translate([width/2, height/2])
                   .scale([1000]);

//
var path = d3.geoPath()
             .projection(projection);

//Load in GeoJSON data
d3.json("data/us-states.json", function(json) {
    console.log(json);
    //Bind data and create one path per GeoJSON feature
    svg.selectAll("path")
       .data(json.features)
       .enter()
       .append("path")
       .attr("d", path)
       .style("fill","rgb(211,211,211)");

});

// update when lifes changes

// Define scales
// function updateVisualization(orders) {
// 	console.log(orders);
// 	//update data length
// 	text.text("Orders: "+orders.length);
//
// 	//circles
//  		// Data-join (circle now contains the update selection)
// 		var circle = svg.selectAll("circle").data(orders,function(d) { return d; });
//     // .data(orders,function(d) { return d; });
//
// 		// Enter (initialize the newly added elements)
//
// // Update (set the dynamic properties of the elements)
// 		circle.enter().append("circle")
// 				  .attr("r", 30)
// 				  .attr("cx", function(d, i) { return (i * 80) + 200 })
// 					.attr("cy", 100)
// 					.attr("fill", function(d){
// 						if (d.product == "tea"){
// 							return "#BFB5A2";
// 						}else{
// 							return "#6f4e37";
// 						}
// 					});
//
//     circle.exit().transition().remove();
//
// }
