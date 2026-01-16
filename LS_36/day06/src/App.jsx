import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <CounterProvider>
      <Counter />
      <ReduxCounter/>

    </CounterProvider>
  );
}

export default App;
