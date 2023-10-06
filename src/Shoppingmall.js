import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
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
        <button>
          <Link to="/list"> LIST</Link>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home_shoppingmall />}></Route>
        <Route path="about" element={<About_shoppingmall />}>
          <Route path="location" element={<Location />}></Route>
        </Route>
        <Route path="/products/*" element={<Products_shoppingmall />}></Route>
        <Route path="/list/*" element={<Items />}></Route>
      </Routes>
    </div>
  );
}

function Items() {
  const location = useLocation();
  console.log(location.search);

  const [searchParams, setSearchParams] = useSearchParams();

  const setSortParams = () => {
    searchParams.set("sort", "cloth");
    setSearchParams(searchParams);
    console.log(searchParams);
  };

  return (
    <div>
      <button>
        <Link to="/list?sort=popular"> popular</Link>
      </button>
      <button>
        <Link to="/list?sort=cloth">cloth</Link>
      </button>
      <Routes>
        <Route path="?sort=popular"></Route>
        <Route path="?sort=cloth"></Route>
      </Routes>
    </div>
  );
}

export default Shoppingmall;
