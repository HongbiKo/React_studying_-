import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../components/store_TodoList";

function ToDo({ text, deleteToDo, id }) {
  return (
    <div>
      <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={deleteToDo}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </li>
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
