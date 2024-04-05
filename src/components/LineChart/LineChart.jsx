import { useEffect, useState } from "react";
import drawChart from "./drawChart";
import generateData from "./generateData";

function LineChart({ width, height }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      drawChart(data, width, height);
    } else {
      const data = generateData();
      setData(data);
    }
  }, [data]);

  return (
    <div>
      <h4>Line Chart</h4>
      <div id="container" />
    </div>
  );
}

export default LineChart;
