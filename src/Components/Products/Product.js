import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  const sPrice = price + "";
  const prices = sPrice.split(".");
  prices[1] = prices[1] || "00";

  console.log(props);

  return (
    <div className="productMain">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="productDetails">
        <h4>{name}</h4>
        <p>
          <em>Manufactured By:</em>{" "}
          <span style={{ color: "#16a085" }}>{seller}</span>
        </p>

        <p style={{ position: "relative" }}>
          <span style={{ fontSize: "14px", position: "absolute" }}>$</span>
          <span style={{ fontSize: "20px", marginLeft: "7px" }}>
            {prices[0]}
          </span>
          <span style={{ fontSize: "12px", position: "absolute" }}>
            {prices[1]}
          </span>
        </p>
        <p>only {stock} left in stock - order soon</p>

        <button className="btn" onClick={()=>props.handleProduct(props.product)}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ marginRight: "5px" }}
          />{" "}
          Add to Card
         
        </button>
      </div>
    </div>
  );
};

export default Product;
