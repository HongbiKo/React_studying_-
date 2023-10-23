import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      {/* toDo뒤의 ?는 Optional Chaining이라는 문법임.
      null이나 undefined인 값이 반환되면, 코드를 즉시 중단하고 undefined를 반환함 */}
      <h1>{toDo?.text}</h1>
      <p>{toDo?.id}</p>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // App.js에서 Detail Route에 설정한 동적 라우팅(path="/:id")으로 전달된
  // path 파라미터 정보를 불러옴
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    // path 파라미터의 id와 같은 toDo.id를 찾음
    toDo: state.find((toDo) => toDo.id === id),
  };
}

export default connect(mapStateToProps)(Detail);
