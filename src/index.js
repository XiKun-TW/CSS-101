import React from "react";
import { render } from "react-dom";
git;

import "./scss/index.scss";

const App = props => <h1>Hello world</h1>;
App.propTypes = {};

window.onload = () => {
  render(<App />, document.querySelector("#app"));
};
