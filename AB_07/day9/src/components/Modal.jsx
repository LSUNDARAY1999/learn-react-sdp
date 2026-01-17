import { Dialog } from "@headlessui/react";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 flex items-center justify-center"
    >
      {/* Background */}
      <div className="fixed inset-0 bg-black/40" />

      {/* Modal Box */}
      <Dialog.Panel className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <Dialog.Title className="text-xl font-bold mb-2">
          Library Modal
        </Dialog.Title>

        <Dialog.Description className="text-gray-600 mb-4">
          This modal is built using Headless UI + Tailwind CSS.
        </Dialog.Description>

        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
