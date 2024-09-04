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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
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
                <img src={`/${item.image}`} alt={item.productName} />
                <div className="item-details">
                  <h2>{item.productName}</h2>
                  <p className="price-tag">Price: Rs.{item.price}</p>
                  <p>Category: {item.category}</p>
                  <button onClick={() => handleRemoveFromCart(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="remove-icon" />
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: Rs.{calculateTotal()}</p>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
