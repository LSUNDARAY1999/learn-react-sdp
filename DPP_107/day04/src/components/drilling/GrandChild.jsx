function GrandChild({ name }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h4>GrandChild</h4>
      <p>Hello {name}</p>
    </div>
  );
}

export default GrandChild;
