import * as React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import A from "./A";
import B from "./B";
import store from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Example - using redux and react-redux</h1>
        <A />
        <B />
      </div>
    </Provider>
  );
}
