import * as d3 from "d3";

const drawChart = (data, width, height) => {
  // Establish margins
  const margin = { top: 10, right: 50, bottom: 50, left: 50 };

  // establish x and y max values
  const yMaxValue = d3.max(data, (d) => d.value);
  const xMinValue = d3.min(data, (d) => d.label);
  const xMaxValue = d3.max(data, (d) => d.label);

  // create chart area
  const svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // create scale for the x axis
  const xScale = d3
    .scaleLinear()
    .domain([xMinValue, xMaxValue])
    .range([0, width]);

  // create scale for y axis
  const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

  // Create x grid
  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));

  // create y grid
  svg
    .append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(""));

  // create the x axis on the bottom
  svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom().scale(xScale).tickSize(15));

  // create the y axis on the left
  svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

  // create a line with x and y coordinates scaled to the data
  const line = d3
    .line()
    .x((d) => xScale(d.label))
    .y((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  // draw the line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#f6c3d0")
    .attr("stroke-width", 4)
    .attr("class", "line")
    .attr("d", line);
};

export default drawChart;
