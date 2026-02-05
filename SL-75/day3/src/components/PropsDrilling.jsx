const GrandChild = ({ name }) => {
  return <h3>Hello {name} 👋</h3>;
};

const Child = ({ name }) => {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <p>Child Component (does not use name)</p>
      <GrandChild name={name} />
    </div>
  );
};

const PropsDrilling = () => {
  return (
    <div>
      <h2>Props Drilling Example</h2>
      <Child name="Sonali" />
    </div>
  );
};

export default PropsDrilling;
