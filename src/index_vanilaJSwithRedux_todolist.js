import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoObj = { text: action.text, id: uuidv4() };
      return [...toDos, newTodoObj];
    case DELETE_TODO:
      const cleanedTodos = toDos.filter((toDo) => toDo.id !== action.id);
      return cleanedTodos;
    default:
      return toDos;
  }
};

const toDosStore = createStore(reducer);

const dispatchAddTodo = (text) => {
  toDosStore.dispatch(addTodo(text));
};
const dispatchDeleteTodo = (event) => {
  const id = event.target.parentNode.id;
  toDosStore.dispatch(deleteTodo(id));
};

const printTodos = () => {
  const toDos = toDosStore.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    delBtn.innerText = "❌";
    li.appendChild(delBtn);
    delBtn.addEventListener("click", dispatchDeleteTodo);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  dispatchAddTodo(toDo);
  input.value = "";
};

toDosStore.subscribe(printTodos);
form.addEventListener("submit", handleSubmit);
