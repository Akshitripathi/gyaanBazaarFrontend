import React, { useState, useEffect } from "react";
import Header from "../navbar/header";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"; // Import CSS file

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <Header />
      <main>
        <h1>Shopping Cart</h1>
        <div className="cart-list">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imageUrl} alt={item.productName} />
                <h2>{item.productName}</h2>
                <p className="price-tag">Price: ${item.price}</p>
                <p>Category: {item.category}</p>
                <button onClick={() => handleRemoveFromCart(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} className="remove-icon" />
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
