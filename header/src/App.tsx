import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <Header />
    <div>Name: header</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
