import { useState } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'
import './App.css'

function App() {
const [open, setOpen] = useState(false);

  return (
    <>
    <Navbar/>
    <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Accessibility in React (A11y Demo)
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
          aria-haspopup="dialog"
        >
          Open Accessible Modal
        </button>

        {open && <Modal onClose={() => setOpen(false)} />}
      </main>
    </>
  )
}

export default App
