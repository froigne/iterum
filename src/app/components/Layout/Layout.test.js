import Layout from "./Layout";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Layout />, div);
});
