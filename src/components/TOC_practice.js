import React, { Component } from "react";

class TOC_practice extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC_practice;
