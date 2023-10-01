import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home_shoppingmall from "./components/Home_shoppingmall";
import About_shoppingmall from "./components/About_shoppingmall";
import Products_shoppingmall from "./components/Products_shoppingmall";
import Location from "./components/Location";

function Shoppingmall() {
  return (
    <div className="Shoppingmall">
      <div>
        <button>
          <Link to="/"> HOME </Link>
        </button>
        <button>
          <Link to="/about"> ABOUT </Link>
        </button>
        <button>
          <Link to="/products"> PRODUCTS </Link>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home_shoppingmall />}></Route>
        <Route path="about" element={<About_shoppingmall />}>
          <Route path="location" element={<Location />}></Route>
        </Route>
        <Route path="/products/*" element={<Products_shoppingmall />}></Route>
      </Routes>
    </div>
  );
}

export default Shoppingmall;
