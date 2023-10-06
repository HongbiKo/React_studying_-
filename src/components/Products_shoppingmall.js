import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

function Products_shoppingmall() {
  let params = useParams();
  // console.log(params);

  return (
    <div>
      <h1>Products 페이지</h1>

      <Link to="/products/1">1</Link>
      <br></br>
      <Link to="/products/2">2</Link>

      <Routes>
        <Route path="/*" element={<div>상품을 선택해주세요.</div>}></Route>

        <Route path=":product_id" element={<Product />} />
      </Routes>
    </div>
  );
}

function Product() {
  let params = useParams();
  const product_id = params.product_id;
  // console.log(product_id);
  return <div>{product_id}번 상품</div>;
}

export default Products_shoppingmall;
