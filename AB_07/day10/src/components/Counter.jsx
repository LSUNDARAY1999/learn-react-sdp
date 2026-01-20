import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">
          React Counter
        </h1>

        <p
          data-testid="count"
          className="text-3xl font-semibold text-blue-600 mb-6"
        >
          {count}
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg
                     hover:bg-blue-700 transition duration-200"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
