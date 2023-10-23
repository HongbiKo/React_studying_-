import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

// Action Type명: Action을 식별하기 위한 문자열
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator: Action 생성 함수
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

// Action Creator: Action 생성 함수
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: uuidv4() }, ...toDos];
    case DELETE_TODO:
      return toDos.filter((toDo) => toDo.id !== action.id);
    default:
      return toDos;
  }
};

const toDosStore = createStore(reducer);

// Action Creator의 묶음
export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default toDosStore;
