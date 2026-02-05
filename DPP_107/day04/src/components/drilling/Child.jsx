import GrandChild from "./GrandChild";

function Child({ name }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h3>Child</h3>
      <GrandChild name={name} />
    </div>
  );
}

export default Child;
