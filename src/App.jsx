import { Histogram, LineChart, TimeSeries } from "./components";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2> React & D3 Chart Examples </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Histogram width={900} height={400} />
        <LineChart width={900} height={400} />
        <TimeSeries width={900} height={400} />
      </div>
    </div>
  );
}

export default App;
