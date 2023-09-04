import React, { Component } from "react";
import Subject_practice from "./components/Subject_practice";
import TOC_practice from "./components/TOC_practice";
import ReadContent_practice from "./components/ReadContent_practice";
import Control_practice from "./components/Control_practice";
import CreateContent_practice from "./components/CreateContent_practice";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 1,
      title: { title: "React", sub: "Let's learn about react" },
      learn: { title: "LEARN REACT", desc: "Learning React start NOW!" },
      subtitle: {
        title: "How to learn React",
        desc: "React is made by Facebook",
      },
      list: [
        { id: 1, title: "step1", desc: "let's learn about how to install" },
        { id: 2, title: "step2", desc: "let's learn about how to start" },
        {
          id: 3,
          title: "step3",
          desc: "let's learn about how to use props and state",
        },
      ],
    };
  }

  render() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "learn") {
      _title = this.state.learn.title;
      _desc = this.state.learn.desc;
      _article = (
        <ReadContent_practice
          title={_title}
          desc={_desc}
        ></ReadContent_practice>
      );
    } else if (this.state.mode === "read") {
      for (let i = 0; i < this.state.list.length; i++) {
        const data = this.state.list[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _article = (
            <ReadContent_practice
              title={_title}
              desc={_desc}
            ></ReadContent_practice>
          );
        }
      }
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent_practice
          onSubmit={function (_submit_title, _submit_desc) {
            this.max_content_id = this.max_content_id + 1;
            const _list = this.state.list.concat({
              id: this.max_content_id,
              title: _submit_title,
              desc: _submit_desc,
            });
            this.setState({ list: _list });
          }.bind(this)}
        ></CreateContent_practice>
      );
    }

    return (
      <div className="Practice">
        <Subject_practice
          title={this.state.title.title}
          sub={this.state.title.sub}
          onChangePage={function () {
            this.setState({ mode: "learn" });
          }.bind(this)}
        ></Subject_practice>
        <TOC_practice
          data={this.state.list}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC_practice>
        <Control_practice
          onChange={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        ></Control_practice>
        {_article}
      </div>
    );
  }
}
export default Practice;
