import React, { Component } from "react";

class List_jjang extends Component {
  render() {
    let list = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default List_jjang;
