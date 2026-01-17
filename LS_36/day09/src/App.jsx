import ModalDemo from "./components/ModalDemo";
import MenuDemo from "./components/MenuDemo";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">
        Headless UI + Tailwind Demo
      </h1>

      <MenuDemo />
      <ModalDemo />
    </div>
  );
}

export default App;
