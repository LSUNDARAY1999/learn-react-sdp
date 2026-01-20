import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "./context/UserContext";
import { increment, decrement } from "./redux/counterSlice";

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Day 7 – State Management</h1>

      <div className="card">
        <h2>Context API</h2>
        {user ? (
          <>
            <p>Logged in as <b>{user}</b></p>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <button onClick={() => setUser("Priti")}>Login</button>
        )}
      </div>

      <div className="card">
        <h2>Redux Counter</h2>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
