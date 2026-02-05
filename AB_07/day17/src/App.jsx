import { useState } from 'react'
import UserList from './components/UserList'
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Mock Server Demo
        </h1>
        <UserList />
      </div>
    </div>
    </>
  )
}

export default App
