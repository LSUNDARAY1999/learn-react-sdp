// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import AccessibleForm from "./components/AccessibleForm";
import AccessibleModal from "./components/AccessibleModal";
import './App.css'

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="p-6">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>

        <AccessibleForm />
      </main>

      <AccessibleModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
