// generate random data and set it to the data element
// ex. [{label: 1, value: 5}, {label:2, value: 10}]
const generateData = () => {
  const chartData = [];
  for (let i = 0; i < 20; i++) {
    const value = Math.floor(Math.random() * i + 3);
    chartData.push({
      label: i,
      value,
    });
  }
  return chartData;
};

export default generateData;
