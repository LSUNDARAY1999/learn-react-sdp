import Parent from "./drilling/Parent";
import Profile from "./composition/Profile";

const App = () => {
  return (
    <div className="app">
      <h1>🧩 Props Drilling vs Composition</h1>

      <div className="grid">
        <Parent />
        <Profile />
      </div>
    </div>
  );
};

export default App;
