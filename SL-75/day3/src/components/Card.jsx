const Card = ({ title, children }) => {
  return (
    <div
      style={{
        border: "2px solid #000",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginTop: "10px"
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
