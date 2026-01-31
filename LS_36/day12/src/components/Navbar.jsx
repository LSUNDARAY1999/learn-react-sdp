// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4" aria-label="Main navigation">
      <ul className="flex gap-6 text-white">
        <li>
          <a href="#home" className="focus:outline-none focus:ring-2">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="focus:outline-none focus:ring-2">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="focus:outline-none focus:ring-2">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
