const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>✅ Composition</h2>
      <div className="content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
