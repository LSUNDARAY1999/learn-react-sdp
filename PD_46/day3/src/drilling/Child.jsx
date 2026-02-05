const Child = ({ user }) => {
  return (
    <div className="box child">
      <p>Child Component</p>
      <strong>Hello, {user} 👋</strong>
    </div>
  );
};

export default Child;
