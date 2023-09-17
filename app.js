import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    { id: "heading" },
    "Hey there Harsh Chandwani this side",
  ),
);
const jsxHeading = <h1 className="harsh" id="hye">Hello World from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
