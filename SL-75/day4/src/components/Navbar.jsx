import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      <NavLink to="/products" style={linkStyle}>Products</NavLink>
    </nav>
  );
};

const linkStyle = ({ isActive }) => ({
  color: isActive ? "yellow" : "white",
  marginRight: "15px",
  textDecoration: "none",
});

export default Navbar;
