import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", { id: "Parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "My Name is Abhijeet 🚀"),
      React.createElement("p", {}, "I am From Pune"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h2", {}, "Hello my friends"),
    ])
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
