import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Radix UI + Tailwind Demo</h1>
      <Modal />
      <Dropdown />
    </div>
  );
}
