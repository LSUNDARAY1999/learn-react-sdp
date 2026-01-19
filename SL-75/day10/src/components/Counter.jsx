import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
             <h4>Jest + React Testing</h4>
      <h2 data-testid="count-value">Count: {count}</h2>
 

      <div className="btn-group">

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
