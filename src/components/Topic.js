import React from "react";
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

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

export default Topic;
