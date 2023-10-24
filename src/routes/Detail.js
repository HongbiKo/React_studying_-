import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail(toDo) {
  const params = useParams();
  const current_id = params.id;
  console.log(params);
  console.log(toDo);

  return (
    <>
      <h1></h1>
      <p>{current_id}</p>
    </>
  );
}

// 여기서 부모의 state를 어떻게 넘겨주는지 모르겠음..

function mapStateToProps(state, ownProps) {
  return {
    toDo: state.text,
  };
}

export default connect(mapStateToProps)(Detail);
