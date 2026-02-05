import UserList from "./components/UserList";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <h2>Custom Hooks Demo</h2>
      <Login />
      <hr />
      <UserList />
    </div>
  );
};

export default App;
