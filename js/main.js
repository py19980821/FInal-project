const width = window.innerWidth * 0.98;
const height = 200;
const margin = 10;



// 2 DATA
// we have d3 load in our CSV file using "d3.csv"
// we have d3 guess our data types using "d3.autotype"
// we output that data to the console using console.log

d3.csv('./data/NYC_median_sales_price.csv', d3.autoType).then(data => {
  console.log("data", data)


// 3 SCALES
// domain relates to data
// range relates to visuals
// we are using "d=> d.____" to tell it to get the value for each row in the column specified
// the data domain for numbers needs to use a max number using "d3.max"

const xScale = d3.scaleBand()
  .domain(data.map(d => d.Year))
  .range([0, width-margin]) 


const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Sale_Price)])
    .range([height, 0])

const colorScale = d3.scaleOrdinal()
                     .domain(["2016","2017","2018","2019"])
                     .range(["#fee8c8","#fdbb84","#e6550d","#e34a33"])


// 4 ELEMENTS APPEND

const svg = d3.select("#barchart")
  .append("svg")
  .attr("width", width-margin)
  .attr("height", height)

// 5 SELECT - JOIN - DRAW
// 6 ATTRIBUTES

svg.selectAll("rect")
  .data(data)
  .join("rect")
  .attr("width", xScale.bandwidth())
  .attr("height", d=> height - yScale(d.Sale_Price))
  .attr("x", d => xScale(d.Year))
  .attr("y", d => yScale(d.Sale_Price))
  .attr("fill", d => colorScale(d.Year));

});