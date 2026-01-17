import ContextCounter from "./components/ContextCounter";
import ReduxCounter from "./components/ReduxCounter";

const App = () => {
  return (
    <div className="app-container">
      <ContextCounter />
      <ReduxCounter />
    </div>
  );
};

export default App;
