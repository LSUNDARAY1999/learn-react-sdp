import { Dialog } from "@headlessui/react";
import { useState } from "react";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black/40" />

        {/* Modal box */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-80">
          <Dialog.Title className="text-lg font-bold">
            Headless UI Modal
          </Dialog.Title>

          <p className="mt-2 text-gray-600">
            This modal uses Headless UI + Tailwind.
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default ModalDemo;
