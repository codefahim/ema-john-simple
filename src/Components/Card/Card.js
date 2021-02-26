import React from 'react';

const Card = (props) => {
   const card= props.card
   const totalPrice= card.reduce((total,product)=>total+product.price,0);
    return (
        <div>
           <h2>Order Summery</h2>
           <p>Items Ordered:{card.length}</p>
           <p>Price: <span>$</span> {totalPrice}</p>
        </div>
    );
};

export default Card;