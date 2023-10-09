import React, { Component } from "react";

class Nav extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    fetch("list.json")
      .then(function (result) {
        return result.json();
      })
      .then(
        function (json) {
          this.setState({ list: json });
        }.bind(this)
      );
  }
  render() {
    let listTag = [];
    for (let i = 0; i < this.state.list.length; i++) {
      const li = this.state.list[i];
      listTag.push(
        <li key={li.id}>
          <a
            href={li.id}
            data-id={li.id}
            onClick={function (e) {
              e.preventDefault();
              console.log("trigger");
              this.props.onClick(e.target.dataset.id);
            }.bind(this)}
          >
            {li.title}
          </a>
        </li>
      );
    }

    return <nav>{listTag}</nav>;
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class ReactAjax extends Component {
  state = {
    article: { title: "Welcome", desc: "Hello, React & Ajax" },
  };

  render() {
    return (
      <div className="ReactAjax">
        <h1>WEB</h1>
        <Nav
          onClick={function (id) {
            fetch(id + ".json")
              .then(function (result) {
                return result.json();
              })
              .then(
                function (json) {
                  this.setState({
                    article: {
                      title: json.title,
                      desc: json.desc,
                    },
                  });
                }.bind(this)
              );
          }.bind(this)}
        ></Nav>
        <Article
          title={this.state.article.title}
          desc={this.state.article.desc}
        ></Article>
      </div>
    );
  }
}

export default ReactAjax;