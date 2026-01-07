import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Click Me
          </button>

          <button
            onClick={() => setCount(0)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
