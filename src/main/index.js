import "./index.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function() {
    axios
      .get(
        "https://382da1d7-8462-4779-8fc6-27c4f4e956a7.mock.pstmn.io/products"
      )
      .then(function(result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function(error) {
        console.error("애러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function(product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={"/product/" + index}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <span className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
