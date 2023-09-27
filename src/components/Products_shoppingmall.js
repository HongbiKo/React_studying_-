import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Products_shoppingmall() {
  return (
    <div>
      <h1>Products 페이지</h1>
      <Link to="/products/1">상품1</Link>
      <Link to="/products/2">상품2</Link>

      <Routes>
        <Route path=":product_id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

function Product() {
  const params = useParams();
  const product_id = params.product_id;
  return <div>{product_id} 번 상품입니다.</div>;
}

export default Products_shoppingmall;
