import React, { Component } from "react";

class UpdateContent_jjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.onFormHandler = this.onFormHandler.bind(this);
  }

  onFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_procss"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onFormSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.onFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.onFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent_jjang;
