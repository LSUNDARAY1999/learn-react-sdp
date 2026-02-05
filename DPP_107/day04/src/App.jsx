import Parent from "./components/drilling/Parent";
import Card from "./components/composition/Card";
import Content from "./components/composition/Content";

function App() {
  return (
    <>
      <h1>Props Drilling Example</h1>
      <Parent />

      <hr />

      <h1>Composition Example</h1>
      <Card>
        <Content />
      </Card>
    </>
  );
}

export default App;
