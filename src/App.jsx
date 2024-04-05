import { Histogram } from "./components";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2> React & D3 Chart Examples </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Histogram width={900} height={500} />
      </div>
    </div>
  );
}

export default App;
