import { useTheme } from "../context/ThemeContext";

export default function ContextDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="card">
      <h2>Context API Demo</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
