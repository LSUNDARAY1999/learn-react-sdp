import * as Dialog from "@radix-ui/react-dialog";

export default function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Open Modal
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md 
          -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
          
          <Dialog.Title className="text-xl font-bold mb-2">
            Radix Modal
          </Dialog.Title>

          <Dialog.Description className="text-gray-600 mb-4">
            Accessible modal powered by Radix UI + Tailwind
          </Dialog.Description>

          <Dialog.Close className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
