import React from "react";
import "./TShirt.css";

const Tshirt = ({ tshirt, addToCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => addToCart(tshirt)}>Add to cart</button>
    </div>
  );
};

export default Tshirt;
