import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CounterProvider } from "./context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </Provider>
  </React.StrictMode>
);
