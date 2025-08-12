import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child-1" },  // Add key here
      [
        React.createElement("h1", { key: "h1-1" }, "I am an h1 Tag"),  // Add key here
        React.createElement("h2", { key: "h2-1" }, "I am h2 Tag"),  // Add key here
      ]
    ),
  ]
);


console.log(Parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
