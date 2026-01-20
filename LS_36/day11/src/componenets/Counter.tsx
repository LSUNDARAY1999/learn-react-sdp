import { useState } from "react";

/* Props typing */
type CounterProps = {
  title: string;
};

const Counter = ({ title }: CounterProps) => {
  /* State typing */
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-white p-6 rounded shadow w-80 text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <p className="text-lg mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
