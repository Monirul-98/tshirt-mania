import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = <p>Please buy some products</p>;
  } else if (cart.length === 1) {
    command = <p>Add More</p>;
  } else {
    command = <p className="thanks">Thanks for buying</p>;
  }
  return (
    <div>
      <h2>Selected Items</h2>
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}{" "}
          <button onClick={() => removeFromCart(tshirt)}>X</button>
        </p>
      ))}
      {command}
      {cart.length >= 4 ? <button>Buy</button> : <p>Add more</p>}
      {cart.length === 5 && (
        <div className="discount">
          <p>Congratulations!!! You've got 30% discount!</p>
          <button>Get</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
