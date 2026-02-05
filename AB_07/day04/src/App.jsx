import { NavLink, Outlet } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white px-6 py-4 flex gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:underline"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:underline"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
