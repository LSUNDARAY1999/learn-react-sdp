import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3>Redux Toolkit</h3>
      <h2>{count}</h2>
      <div className="btn-group">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
