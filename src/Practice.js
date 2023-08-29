import React, { Component } from "react";
import Subject_practice from "./components/Subject_practice";
import TOC_practice from "./components/TOC_practice";
import Content_practice from "./components/Content_practice";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      learn: { title: "Let's learn about React", desc: "How to use React" },
      subject: { title: "React", sub: "What is React?" },
      content: { title: "React", desc: "React is made by FaceBook" },
      list: [
        { id: 1, title: "step1", desc: "how to install React" },
        { id: 2, title: "step2", desc: "how to start React" },
        { id: 3, title: "step3", desc: "how to use props and state" },
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
      for (let i = 0; i < this.state.list.length; i++) {
        const item = this.state.list[i];
        if (item.id === this.state.selected_content_id) {
          _title = item.title;
          _desc = item.desc;
        }
      }
    }

    return (
      <div className="Practice">
        <Subject_practice
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChange={function () {
            this.setState({ mode: "learn" });
          }.bind(this)}
        ></Subject_practice>
        <TOC_practice
          data={this.state.list}
          onChange={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
        ></TOC_practice>
        <Content_practice title={_title} desc={_desc}></Content_practice>
      </div>
    );
  }
}

export default Practice;
