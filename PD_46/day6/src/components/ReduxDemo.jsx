import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function ReduxDemo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Toolkit Demo</h2>
      <p>Count: <strong>{count}</strong></p>
      <div className="btn-group">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
