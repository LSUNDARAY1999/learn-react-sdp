
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div className="bg-red-400 min-h-screen flex flex-col items-center justify-center">
      
      <h1 className="font-bold text-center text-2xl mb-2">
        LUCKY SUNDARAY
      </h1>

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Count: {count}
      </h2>

      <div className="flex gap-4">
        
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click Me
        </button>

        
        <button
          className="bg-white text-black px-4 py-2 rounded border"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;
