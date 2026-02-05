import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

export default function LibraryDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="rounded-2xl bg-white p-8 shadow-xl text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Component Library Demo
        </h1>

        <p className="text-sm text-gray-600">
          Headless UI + Tailwind integration example
        </p>

        <Button onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
