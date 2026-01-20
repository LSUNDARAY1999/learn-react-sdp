import { useState } from "react";

/* ✅ Props typing */
type CounterProps = {
  title: string;
};

/* ✅ Typed functional component */
const Counter = ({ title }: CounterProps) => {
  /* ✅ State typing */
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-72 p-6 bg-white rounded-xl shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        Count: <span className="font-bold">{count}</span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
