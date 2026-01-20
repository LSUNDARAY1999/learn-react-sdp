import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Component Library Demo</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Home;
