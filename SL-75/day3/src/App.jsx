import PropsDrilling from "./components/PropsDrilling.jsx";
import Composition from "./components/Composition.jsx";

const App = () => {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <PropsDrilling />
      <hr style={{ margin: "30px 0" }} />
      <Composition />
    </div>
  );
};

export default App;
