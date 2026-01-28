import { useState } from "react";

// 1. Props typing
interface CounterProps {
  title: string;
  start: number;
}

const Counter: React.FC<CounterProps> = ({ title, start }) => {
  // 2. State typing (inferred here)
  const [count, setCount] = useState<number>(start);

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
