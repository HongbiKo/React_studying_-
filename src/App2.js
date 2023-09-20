import React, { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow(false);
        }}
      ></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

const funcStyle = "color:blue";
let funcId = 0;

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());

  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount) " + ++funcId,
      funcStyle
    );
    document.title = number;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentWillUnMount)" + ++funcId,
        funcStyle
      );
    };
  }, []);

  // side effect
  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount & componentDidUpdate)" + ++funcId,
      funcStyle
    );
    document.title = number + " : " + date;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentDidMount & componentDidUpdate)" +
          ++funcId,
        funcStyle
      );
    };
  });

  console.log("%cfunc => render " + ++funcId, funcStyle);

  return (
    <div className="container">
      <h1>Function style Component</h1>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

const classStyle = "color:red";

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }

  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("%cclass => componentWillUpdate", classStyle);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }

  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h1>Class style Component</h1>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App2;
