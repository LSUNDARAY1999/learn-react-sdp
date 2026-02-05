import Counter from './components/Counter'
import './App.css'

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold text-gray-900">
        React + TypeScript Demo
      </h1>

      {/* ✅ Correct prop type */}
      <Counter title="My Counter" />

      {/* ❌ TypeScript error if uncommented */}
      {/* <Counter title={100} /> */}
    </div>
    </>
  )
}

export default App
