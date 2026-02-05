export default function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg hover:brightness-110 focus:ring-blue-400",
    secondary:
      "bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 focus:ring-gray-400",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
