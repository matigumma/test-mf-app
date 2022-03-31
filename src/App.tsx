import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "header/Header";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <Header />
    <div>Name: test-mf-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
