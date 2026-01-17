import Counter from "./components/Counter";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="app">
      <h1>⚛️ useState & useEffect Demo</h1>
      <div className="grid">
        <Counter />
        <Users />
      </div>
    </div>
  );
};

export default App;
