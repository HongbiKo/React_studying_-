import React, { Component } from "react";
import Subject_jjang from "./components/Subject_jjang";
import List_jjang from "./components/List_jjang";
import ReadContent_jjang from "./components/ReadContent_jjang";
import Control_jjang from "./components/Control_jjang";
import CreateContent_jjang from "./components/CreateContent_jjang";
import UpdateContent_jjang from "./components/UpdateContent_jjang";

class Jjang extends Component {
  constructor(props) {
    super(props);
    this.max_list_id = 3;
    this.state = {
      mode: "normal",
      selected_list_id: 1,
      favorite: {
        title: "what is her favorite",
        desc: "her favorite is a meat",
      },
      subject: {
        title: "let's see her feature",
        sub: "explore her attraction",
      },
      content: {
        title: "click the mode",
        desc: "you can see more information",
      },
      list: [
        { id: 1, title: "smile mode", desc: "her smile is really cute" },
        { id: 2, title: "angry mode", desc: "her anger is really tough" },
        {
          id: 3,
          title: "gloomy mode",
          desc: "her emotion is up and down now",
        },
      ],
    };
  }

  getNormalContent() {
    for (let i = 0; i < this.state.list.length; i++) {
      const data = this.state.list[i];
      if (data.id === this.state.selected_list_id) {
        return data;
      }
    }
  }

  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "favorite") {
      _title = this.state.favorite.title;
      _desc = this.state.favorite.desc;
      _article = (
        <ReadContent_jjang title={_title} desc={_desc}></ReadContent_jjang>
      );
    } else if (this.state.mode === "normal") {
      const _content = this.getNormalContent();
      _article = (
        <ReadContent_jjang
          title={_content.title}
          desc={_content.desc}
        ></ReadContent_jjang>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent_jjang
          onFormSubmit={function (_title, _desc) {
            this.max_list_id = this.max_list_id + 1;
            const _list = this.state.list.concat({
              id: this.max_list_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              list: _list,
              mode: "normal",
              selected_list_id: this.max_list_id,
            });
          }.bind(this)}
        ></CreateContent_jjang>
      );
    } else if (this.state.mode === "update") {
      const _content = this.getNormalContent();
      _article = (
        <UpdateContent_jjang
          data={_content}
          onFormSubmit={function (_id, _title, _desc) {
            const _list = Array.from(this.state.list);
            for (let i = 0; i < _list.length; i++) {
              if (_list[i].id === _id) {
                _list[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            this.setState({
              list: _list,
              mode: "normal",
            });
          }.bind(this)}
        ></UpdateContent_jjang>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="Jjang">
        <Subject_jjang
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "favorite" });
          }.bind(this)}
        ></Subject_jjang>
        <List_jjang
          data={this.state.list}
          onChangePage={function (id) {
            this.setState({ mode: "normal", selected_list_id: Number(id) });
          }.bind(this)}
        ></List_jjang>
        <Control_jjang
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                const _list = Array.from(this.state.list);
                for (let i = 0; i < _list.length; i++) {
                  if (_list[i].id === this.state.selected_list_id) {
                    _list.splice(i, 1);
                    break;
                  }
                }
                this.setState({ list: _list, mode: "favorite" });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control_jjang>
        {this.getContent()}
      </div>
    );
  }
}

export default Jjang;
