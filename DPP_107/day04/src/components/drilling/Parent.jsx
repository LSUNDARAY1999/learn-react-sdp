import Child from "./Child";

function Parent() {
  const userName = "Priti";

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>Parent</h2>
      <Child name={userName} />
    </div>
  );
}

export default Parent;
