import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";
import UpdateContent from "./components/UpdateContent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 1,
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      subject_Subject: { title: "WEB", sub: "World Wide Web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
      subject_Content: {
        title: "HTML",
        desc: "HTML is HyperText Markup Language.",
      },
    };
  }

  getReadContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      const data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }
  }

  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      const _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_submit_title, _submit_desc) {
            this.max_content_id = this.max_content_id + 1;

            // immutale method 1
            // const _contents = this.state.contents.concat({
            //   id: this.max_content_id,
            //   _title: _submit_title,
            //   _desc: _submit_desc,
            // });

            // immutable method 2
            const newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _submit_title,
              desc: _submit_desc,
            });
            this.setState({
              contents: newContents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onFormSumbit={function (_id, _title, _desc) {
            const _contents = Array.from(this.state.contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    console.log("App render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject_Subject.title}
          sub={this.state.subject_Subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
