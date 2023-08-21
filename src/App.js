import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_Subject: { title: "WEB", sub: "World Wide Web!" },
      subject_Content: {
        title: "HTML",
        desc: "HTML is HyperText Markup Language.",
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject_Subject.title}
          sub={this.state.subject_Subject.sub}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title={this.state.subject_Content.title}
          desc={this.state.subject_Content.desc}
        ></Content>
      </div>
    );
  }
}

export default App;
