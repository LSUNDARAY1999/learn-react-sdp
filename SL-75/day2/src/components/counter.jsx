import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-[340px] text-center transition hover:scale-[1.02]">
        
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-gray-800 mb-8 transition-all duration-300">
          {count}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-400 to-red-600 text-white text-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white text-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            +
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          <span className="font-medium"></span>
        </p>

      </div>
    </div>
  );
}

export default Counter;
