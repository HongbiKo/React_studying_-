import React, { Component } from "react";
import Subject_practice from "./components/Subject_practice";
import Content_practice from "./components/Content_practice";
import TOC_practice from "./components/TOC_practice";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "How to learn React", sub: "Let's try to use state." },
      content: {
        title: "How to use state",
        desc: "state is like a small composition inside a machine.",
      },
      toc: [
        { id: 1, title: "step1", desc: "what is state" },
        { id: 2, title: "step2", desc: "why should we use" },
        { id: 3, title: "step3", desc: "how can I use" },
      ],
    };
  }
  render() {
    return (
      <div className="Practice">
        <Subject_practice
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject_practice>
        <Content_practice
          title={this.state.content.title}
          desc={this.state.content.desc}
        ></Content_practice>
        <TOC_practice data={this.state.toc}></TOC_practice>
      </div>
    );
  }
}

export default Practice;
