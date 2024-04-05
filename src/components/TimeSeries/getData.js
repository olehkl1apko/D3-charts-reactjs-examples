import * as d3 from "d3";

const URL =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";

const getData = async () => {
  let data = [];
  await d3.csv(
    URL,
    () => {},
    function (d) {
      data.push({
        date: d3.timeParse("%Y-%m-%d")(d.date),
        value: parseFloat(d.value),
      });
    }
  );

  return data;
};

export default getData;
