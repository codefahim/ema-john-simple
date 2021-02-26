import React, { useState } from "react";
import "./shop.css";
import fakeData from "../../fakeData";
import Product from "../Products/Product";
import Card from "../Card/Card";

const Shop = () => {
  const data = fakeData.slice(0, 5);
  const [products, setProducts] = useState(data);
  const [card, setCard] = useState([]);
  const handleProduct = (product) => {
 
    const items = [ ...card, product ];
    setCard(items);
  };

  return (
    <div className="main">
      <div className="productContainer">
        {products.map((pro) => (
          <Product product={pro} handleProduct={handleProduct}></Product>
        ))}
      </div>
      <div className="cardContainer">
       <Card card={card}></Card>
      </div>
    </div>
  );
};

export default Shop;
