import React, { Component } from "react";
import Subject_practice from "./components/Subject_practice";
import TOC_practice from "./components/TOC_practice";
import ReadContent_practice from "./components/ReadContent_practice";
import CreateContent_practice from "./components/CreateContent_practice";
import Control_practice from "./components/Control_practice";
import UpdateContent_practice from "./components/UpdateContent_practice";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 1,
      learn: {
        title: "Let's learn about React",
        desc: "React is made by Facebook",
      },
      subject: { title: "What is React?", sub: "React is a library" },
      content: {
        title: "React is comfortable",
        desc: "React is consisted of Components",
      },
      list: [
        { id: 1, title: "step1", desc: "How to install" },
        { id: 2, title: "step2", desc: "How to start" },
        { id: 3, title: "step3", desc: "How to use props and state" },
      ],
    };
  }

  getReadContent() {
    for (let i = 0; i < this.state.list.length; i++) {
      const data = this.state.list[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }
  }

  getContent() {
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
      const _content = this.getReadContent();
      _article = (
        <ReadContent_practice
          title={_content.title}
          desc={_content.desc}
        ></ReadContent_practice>
      );
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
            this.setState({
              list: _list,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent_practice>
      );
    } else if (this.state.mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent_practice
          data={_content}
          onFormSubmit={function (_id, _title, _desc) {
            const _list = Array.from(this.state.list);
            for (let i = 0; i < _list.length; i++) {
              if (_list[i].id === _id) {
                _list[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            this.setState({ list: _list, mode: "read" });
          }.bind(this)}
        ></UpdateContent_practice>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="Practice">
        <Subject_practice
          title={this.state.subject.title}
          sub={this.state.subject.sub}
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
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                const _list = Array.from(this.state.list);
                for (let i = 0; i < _list.length; i++) {
                  if (_list[i].id === this.state.selected_content_id) {
                    _list.splice(i, 1);
                    break;
                  }
                }
                this.setState({ list: _list, mode: "learn" });
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control_practice>
        {this.getContent()}
      </div>
    );
  }
}

export default Practice;
