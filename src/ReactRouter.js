import React, { Component } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Contact from "./components/Contact";

function ReactRouter() {
  return (
    <HashRouter>
      <div className="ReactRouter">
        <h1>Hello React Router DOM</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default ReactRouter;
