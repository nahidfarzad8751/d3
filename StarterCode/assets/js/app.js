

// hight and padding 
var width = 800;
var height = 500;
var margin = 20;
var labelArea = 80;
var tPadBot = 30;
var tPadLeft = 30;

// canvas 
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

// radius for each point 
var radius;
function crGet() {
  if (width <= 530) {
    radius = 5;
  }
  else {
    radius = 10;
  }
}
crGet();





// X axsis
svg.append("g").attr("class", "xText")
var xText = d3.select(".xText");

function xTextRefresh() {
  xText.attr(
    "transform",
    "translate(" +
      ((width - labelArea) / 2 + labelArea) +
      ", " +
      (height - margin - tPadBot) +
      ")"
  );
}
xTextRefresh();




//Income data
xText
  .append("text")
  .attr("y", 26)
  .attr("data-name", "income")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Household Income (Median)");



// Y axis
var leftTextX = margin + tPadLeft;
var leftTextY = (height + labelArea) / 2 - labelArea;

svg.append("g").attr("class", "yText");

var yText = d3.select(".yText");

function yTextRefresh() {
  yText.attr(
    "transform",
    "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
  );
}
yTextRefresh();



//Obesity data 
yText
  .append("text")
  .attr("y", 0)
  .attr("data-name", "obesity")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Obesity (%");     


var curX = "income";
var curY = "obesity";


// import csv
d3.csv("assets/data/data.csv").then(function(data) {
  visualize(data);
 console.log(data)
function visualize(theData) {
   var curX = "income";
   var curY = "obesity";
  


  var yScale = d3
      .scaleLinear()

  
 
    var xMin;
    var xMax;
    var yMin;
    var yMax; 
  }
function xRange(){
  xMin = d3.min(data,function(d){
    return parseFloat (d[curX])*.90;

  });
  xMax = d3.max(data,function(d){
    return parseFloat (d[curX])*1.1;
  })
}
function yRange(){
  yMin = d3.min(data,function(d){
    return parseFloat (d[curY])*.90;

  });
  yMax = d3.max(data,function(d){
    return parseFloat (d[curY])*1.1;
  })
}

xRange();
yRange();

var xScale = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .range([margin + labelArea, width - margin]);
var yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([height - margin - labelArea, margin]);

var xAxis= d3.axisBottom(xScale);
var yAxis= d3.axisLeft(yScale);


function tickMarks() {
  if (width <= 500) {
    xAxis.ticks(5);
    yAxis.ticks(5);
  }
  else {
    xAxis.ticks(10);
    yAxis.ticks(10);
  }
}
tickMarks();



svg
  .append("g")
  .call(xAxis)
  .attr ("class", "xAxis")
  .attr("transform", "translate(0," + (height-margin-labelArea)+")");
svg
  .append("g")
  .call(yAxis)
  .attr ("class", "yAxis")
  .attr("transform", "translate(" + (margin+labelArea)+",0)");




//circles 
var theCirc = svg.selectAll("g theCircles").data(data).enter();

theCirc
    .append("circle")
    .attr("cx", function(d) {
      return xScale(d[curX]);
    })
    .attr("cy", function(d) {
      return yScale (d[curY]);
    })
    .attr("r", radius)
    .attr("class", function(d) {
      return "stateCircle " + d.abbr;
    })





    

//state abreevs 
theCirc
    .append("text")
    .text(function(d) {
      return d.abbr;
    })
    .attr("dx", function(d) {
      return xScale(d[curX]);
    })
    .attr("dy", function(d) {
      return yScale(d[curY]) + radius / 2.5;
    })
    .attr("font-size", radius)
    .attr("class", "stateText")

  });
