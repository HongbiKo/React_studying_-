import React, { Component } from "react";

class Control_practice extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChange("create");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChange("update");
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChange("delete");
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}
export default Control_practice;
