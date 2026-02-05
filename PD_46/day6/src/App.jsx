import Navbar from "./components/Navbar";
import ContextDemo from "./components/ContextDemo";
import ReduxDemo from "./components/ReduxDemo";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <ContextDemo />
        <ReduxDemo />
      </div>
    </div>
  );
}
