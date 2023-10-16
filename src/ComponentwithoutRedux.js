import React, { Component } from "react";
import "./ComponentwithoutRedux.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class ComponentwithoutRedux extends Component {
  state = {
    number: 10,
  };
  render() {
    return (
      <div className="ComponentwihtoutRedux">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default ComponentwithoutRedux;
