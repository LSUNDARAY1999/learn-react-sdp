import Middle from "./Middle";

const Parent = () => {
  const user = "Pratap";

  return (
    <div className="card">
      <h2>❌ Props Drilling</h2>
      <Middle user={user} />
    </div>
  );
};

export default Parent;
