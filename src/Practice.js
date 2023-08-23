import React, { Component } from "react";
import Subject_practice from "./components/Subject_practice";
import Content_practice from "./components/Content_practice";
import TOC_practice from "./components/TOC_practice";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      learn: {
        title: "React is a library",
        desc: "React is made by Facebook.",
      },
      selected_content_id: 1,
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
    let _title,
      _desc = null;
    if (this.state.mode === "learn") {
      _title = this.state.learn.title;
      _desc = this.state.learn.desc;
    } else if (this.state.mode === "read") {
      for (let i = 0; i < this.state.toc.length; i++) {
        const data = this.state.toc[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
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
          data={this.state.toc}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC_practice>
        <Content_practice title={_title} desc={_desc}></Content_practice>
      </div>
    );
  }
}

export default Practice;
