import * as d3 from "d3";

const drawChart = (data, width, height) => {
  // build a dictionary to record the frequency of each state in the json response
  let stateFreq = {};
  data.forEach((element) => {
    if (stateFreq[element.state] > 0) {
      stateFreq[element.state] = stateFreq[element.state] + 1;
    } else {
      stateFreq[element.state] = 1;
    }
  });

  // convert the dictionary to an array
  let stateFreqArray = Object.keys(stateFreq).map(function (key) {
    return { state: key, frequency: stateFreq[key] };
  });

  // sort the array by frequency and send it to the data variable
  const res = stateFreqArray.sort(function (a, b) {
    return b.frequency - a.frequency;
  });

  // declare margins
  const margin = { top: 70, right: 50, bottom: 70, left: 50 };

  // create the svg that holds the chart
  const svg = d3
    .select("#histogram")
    .append("svg")
    .style("background-color", "white")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(0,-${margin.bottom - 10})`);

  // create the x axis scale, scaled to the states
  const xScale = d3
    .scaleBand()
    .domain(res.map((d) => d.state))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1);

  // create the y axis scale, scaled from 0 to the max
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(res, (d) => d.frequency)])
    .range([height - margin.bottom, margin.top]);

  // create a scale between colors that varies by the frequency
  const barColors = d3
    .scaleLinear()
    .domain([0, d3.max(res, (d) => d.frequency)])
    .range(["blue", "red"]);

  // set the x axis on the bottom.
  // tilts the axis text so it's readable and not smushed.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-1em")
    .attr("dy", ".2em")
    .attr("transform", "rotate(-65)");

  // set the y axis on the left
  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));

  // create the actual bars on the graph, appends a 'rect' for every data element
  // sets the x and y positions relative to the scales already established
  // sets the height according to the yscale
  // static bar width, color is scaled on the y axis
  // finally the bars have an outline
  svg
    .selectAll("rect")
    .data(res)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.state))
    .attr("y", (d) => yScale(d.frequency))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(0) - yScale(d.frequency))
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", (d) => `${d * 10}px`)
    .attr("fill", function (d) {
      return barColors(d.frequency);
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1);
};

export default drawChart;
