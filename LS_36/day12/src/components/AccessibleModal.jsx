// components/AccessibleModal.jsx
import { useEffect } from "react";

export default function AccessibleModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.getElementById("closeBtn")?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-lg font-bold">Accessible Modal</h2>
        <p className="mt-2">Press ESC or close button</p>

        <button
          id="closeBtn"
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
