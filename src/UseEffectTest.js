import React, { useState, useEffect } from "react";

function UseEffectTest() {
  const [count, setCount] = useState(0);
  let counting = () => setCount(count + 1);
  const [name, setName] = useState("CheolSu");
  let handleChangeName = (e) => setName(e.target.value);

  // side effect
  useEffect(() => {
    console.log("useEffect!!", count);

    return function () {
      //clean up
      console.log("cleanup!", count);
    };
  }, [count]);

  return (
    <div>
      <p>안녕하세요. {name} 입니다.</p>
      <input onChange={handleChangeName}></input>
      <p>{count}번 클릭</p>
      <button onClick={counting}>Click me</button>
    </div>
  );
}

export default UseEffectTest;
