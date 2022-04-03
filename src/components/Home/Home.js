import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);
  const addToCart = (selectedItem) => {
    const exists = cart.find((tshirt) => tshirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Items already selected");
    }
  };
  const removeFromCart = (selectedItem) => {
    const rests = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(rests);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tshirt={tShirt}
            addToCart={addToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
