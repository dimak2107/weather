import "./App.css";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="app__container">
      <h1 className="app__header">weather today</h1>
      <Weather />
    </div>
  );
}

export default App;
