import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          CI/CD Demo
        </h1>
        <p className="text-gray-600 mb-2">
          This React app uses Tailwind CSS.
        </p>
        <p className="text-gray-500">
          GitHub Actions builds this project automatically.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
