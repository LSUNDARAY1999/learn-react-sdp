export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="p-4 bg-gray-900 text-white">
      <ul className="flex gap-4">
        <li>
          <a href="#" className="focus:outline-none focus:ring-2">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="focus:outline-none focus:ring-2">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}