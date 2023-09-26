import React from "react";
import Topic from "./Topic";
import { Routes, Route, NavLink } from "react-router-dom";

const contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

function Topics() {
  let list = [];
  for (let i = 0; i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <ul>{list}</ul>
      <Routes>
        <Route path=":topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

export default Topics;
