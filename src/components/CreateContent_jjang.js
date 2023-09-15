import React, { Component } from "react";

class CreateContnet_jjang extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onFormSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="description"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" value="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContnet_jjang;
