import { useState } from 'react'
import './App.css'
import SprintSummary from './components/SprintSummary'
import FeatureList from './components/FeatureList'
import Feedback from './components/Feedback'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <SprintSummary />
        <FeatureList />
        <Feedback />
      </div>
    </div>
    </>
  )
}

export default App
