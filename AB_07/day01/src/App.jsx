import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
      <p className="bg-amber-300 text-amber-900 font-bold py-2 rounded mb-4">
        Hello I am Ananya Bisoi
      </p>

      <h2 className="text-2xl font-semibold mb-4">Counter App-_-</h2>

      <p className="text-xl font-bold mb-6">Count: {count}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
