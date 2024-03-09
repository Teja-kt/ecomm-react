import React from "react";
import { useState } from "react";
import "./cart.css";

const Cart = ({ content }) => {
  
  const [count, setcount] = useState(1);

  const handleminus = () => {
    if(count<1) setcount(0)
    else setcount(count-1)
  }

  let x = content;
  return (
    <div className="cart-items">
      { x.map((card) => (
        <div key={card.id} className="products">
          <img src={card.image} className="image" alt="im" />
          <h4 className="title">{card.title}</h4>
          <p>Price : {card.price}</p>
          <button className="btns" onClick={handleminus}>{count}</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
