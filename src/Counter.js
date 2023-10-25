import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./store/counter/countSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        -
      </button>
      <div>value: {value}</div>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        +
      </button>
    </div>
  );
}
