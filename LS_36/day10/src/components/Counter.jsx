import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-gray-100 rounded text-center">
      <h1 className="text-xl font-bold mb-4">
        Count: {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
