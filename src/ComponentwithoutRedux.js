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
        <AddNumberRoot
          onClick={function (size) {
            this.setState({ number: this.state.number + size });
          }.bind(this)}
        ></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default ComponentwithoutRedux;
