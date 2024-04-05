import { useEffect, useState } from "react";
import getData from "./getData";
import drawChart from "./drawChart";

const TimeSeries = ({ width, height }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      drawChart(data, width, height);
    } else {
      getData().then((data) => setData(data));
    }
  }, [data, height, width]);

  return (
    <div>
      <h4>Time Series (from .csv file)</h4>
      <div id="time_series" />
    </div>
  );
};

export default TimeSeries;
