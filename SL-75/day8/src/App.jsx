import Users from "./components/Users";
import Auth from "./components/Auth";

const App = () => {
  return (
    <div className="app">
      <h1>🪝 Custom Hooks Demo</h1>
      <div className="grid">
        <Auth />
        <Users />
      </div>
    </div>
  );
};

export default App;
