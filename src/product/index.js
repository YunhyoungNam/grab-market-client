import "./index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function() {
    axios
      .get(
        "https://382da1d7-8462-4779-8fc6-27c4f4e956a7.mock.pstmn.io/products/" +
          id
      )
      .then(function(result) {
        setProduct(result.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다.</h1>;
  }
  console.log(id);
  console.log(product);
  console.log(product.products[id].name);
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.products[id].imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.products[id].seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.products[id].name}</div>
        <div id="price">{product.products[id].price + "원"}</div>
        <div id="createdAt">2022년 09월 20일</div>
        <div id="description">{product.products[id].discription}</div>
      </div>
    </div>
  );
}

export default ProductPage;
