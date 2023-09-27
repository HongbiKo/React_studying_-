import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useParams } from "react-router";

const contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

function Topic() {
  const params = useParams();
  const topic_id = params.topic_id;
  let selected_topic = {
    title: "sorry",
    description: "not found",
  };

  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  console.log(params);
  console.log(topic_id);

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

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
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

export default Topics;
