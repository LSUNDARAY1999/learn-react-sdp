import { useCounter } from "../context/CounterContext";

const ContextCounter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="box">
      <h3>Context API</h3>
      <h2>{count}</h2>
      <div className="btn-group">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default ContextCounter;
