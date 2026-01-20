import { useState } from 'react'
import LoginStatus from './components/LoginStatus'
import UserList from './components/UserList'
import './App.css'

function App() {

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-xl space-y-6">
        <h1 className="text-center text-2xl font-bold">
          Custom Hooks Demo
        </h1>

        <p className="text-center text-gray-600 text-sm">
          This demo shows how <b>custom hooks</b> separate logic from UI.
        </p>

        <LoginStatus />
        <UserList />
      </div>
    </div>
    </>
  )
}

export default App
