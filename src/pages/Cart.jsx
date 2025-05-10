import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [isButtonClicked, setIsButtonClicked] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setIsButtonClicked(item.id);
    setTimeout(() => setIsButtonClicked(null), 300);
  };

  return (
    <div className="cart-container">
      <div className="cart" style={{ padding: "2rem", textAlign: "center" }}>
        <h2 className="cart-title">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="item-details">
                {item.name} - {item.price} DZD x {item.qty}
              </p>
              <div className="item-buttons">
                <button
                  onClick={() => handleAddToCart(item)}
                  className={isButtonClicked === item.id ? "clicked" : ""}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <h3 className="cart-total">Total: {total} DZD</h3>
        {cart.length > 0 && (
          <Link to="/checkout">
            <button
              style={{
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
                marginTop: "1rem",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#FFD700",
                color: "#000000",
                cursor: "pointer",
              }}
            >
              Complete The Checkout ®️
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
