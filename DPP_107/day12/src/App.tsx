import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter title="My Counter" start={5} />

      {/* ❌ This will throw TS error */}
      {/* <Counter title="Wrong" start="5" /> */}
    </div>
  );
}

export default App;
