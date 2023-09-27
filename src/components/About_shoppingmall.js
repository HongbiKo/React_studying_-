import React from "react";
import { Outlet } from "react-router-dom";

function About_shoppingmall() {
  return (
    <div>
      <h1>About 페이지</h1>
      <p>여기는 어바웃입니다.</p>
      <Outlet />
    </div>
  );
}

export default About_shoppingmall;
