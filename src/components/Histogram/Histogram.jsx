import { useEffect } from "react";
import { useGetData } from "./useGetData";
import drawChart from "./drawChart";

const Histogram = ({ width, height }) => {
  const { data, error } = useGetData();

  useEffect(() => {
    if (data?.length > 0) {
      drawChart(data, width, height);
    }
  }, [data, height, width]);

  if (error) {
    return <h4> Getting data is failed. Try again </h4>;
  }

  return (
    <div>
      <h4> Histogram (from dummy api) </h4>
      <div id="histogram" />
    </div>
  );
};

export default Histogram;
