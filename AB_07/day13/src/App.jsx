import { useCallback,useState } from 'react'
import VirtualList from './components/VirtualList'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

    // Memoized handler
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const items = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <>
   <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Performance Optimization Demo
      </h1>

      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-600 text-white mb-4"
      >
        Counter: {count}
      </button>

      <VirtualList items={items} />
    </div>
    </>
  )
}

export default App
