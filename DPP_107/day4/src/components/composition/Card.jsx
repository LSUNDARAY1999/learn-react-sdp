function Card({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      {children}
    </div>
  );
}

export default Card;
