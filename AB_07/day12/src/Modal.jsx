import { useEffect, useRef } from "react";

export default function Modal({ onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded w-80">
        <h2 id="modal-title" className="text-lg font-bold">
          Accessible Modal
        </h2>

        <p className="mt-2">
          This modal is keyboard and screen-reader friendly.
        </p>

        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="mt-4 px-3 py-1 bg-red-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}