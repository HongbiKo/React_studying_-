import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/Todo";
import { actionCreators } from "../components/store_TodoList";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }

  function onChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <h1>To-do List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={text}
          placeholder="✍️Write To-do..."
        />
        <button>✚</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
