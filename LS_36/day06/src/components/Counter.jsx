import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
