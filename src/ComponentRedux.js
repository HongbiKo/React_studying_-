import React, { Component } from "react";
import "./ComponentRedux.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class ComponentRedux extends Component {
  render() {
    return (
      <div className="ComponentRedux">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default ComponentRedux;
