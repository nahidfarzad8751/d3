
var width = parseInt(d3.select("#scatter").style("width"));

// hight and padding 
var width = 900;
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
  if (width <= 500) {
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
xText
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

function visualize(theData) {
   var curX = "income";
   var curY = "obesity";
  
}

var yScale = d3
    .scaleLinear()

var circRadius;
function crGet() {
  if (width <= 530) {
  circRadius = 10;
  }
  else {
  circRadius = 10;
      }
    }
    crGet();
    

//circles and state abreevs 
var theCircles = svg.selectAll("g theCircles").data(data).enter();

theCircles
    .append("circle")
    .attr("cx", function(d) {
      return xScale(d[curX]);
    })
    .attr("cy", function(d) {
      return yScale(d[curY]);
    })
    .attr("r", circRadius)
    .attr("class", function(d) {
      return "stateCircle " + d.abbr;
    })

theCircles
    .append("text")
    .text(function(d) {
      return d.abbr;
    })
    .attr("dx", function(d) {
      return xScale(d[curX]);
    })
    .attr("dy", function(d) {
      return yScale(d[curY]) + circRadius / 2.5;
    })
    .attr("font-size", circRadius)
    .attr("class", "stateText")

  });


  var xScale = d3
  .scaleLinear()
  .range([margin + labelArea, width - margin]);
