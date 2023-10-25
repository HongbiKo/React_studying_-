import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail(state) {
  const params = useParams();
  const current_id = params.id;
  return (
    <>
      <h1></h1>
      <p>{current_id}</p>
    </>
  );
}

// 여기서 부모의 state를 어떻게 넘겨주는지 모르겠음..

function mapStateToProps(state, ownProps) {
  console.log(ownProps);

  return {
    state,
  };
}

export default connect(mapStateToProps)(Detail);
