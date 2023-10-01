import React from "react";
import { useParams } from "react-router-dom";

function Products_shoppingmall() {
  let params = useParams();
  const product_id = params.product_id;
  console.log(params);
  return (
    <div>
      <h1>Products 페이지</h1>
      <div>{product_id}번 상품</div>
    </div>
  );
}

export default Products_shoppingmall;
