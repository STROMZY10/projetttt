import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      setError("Please fill in all the fields.");
      return;
    }

    setOrderConfirmed(true);
    setError("");

    //هنا كي درنا thankyou
    setTimeout(() => {
      navigate("/thank-you", { state: { name, phone, address, total } });
    }, 2000);
  };

  return (
    <div className="checkout" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Checkout</h2>
      {orderConfirmed ? (
        <div>
          <h3>Order Confirmed!</h3>
          <p>Your order is being processed.</p>
        </div>
      ) : (
        <div>
          <h3>Your Cart:</h3>
          <div>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id}>
                  <p>{item.name} - {item.price} DZD x {item.qty} = {item.price * item.qty} DZD</p>
                </div>
              ))
            )}
          </div>

          <h3>Total: {total} DZD</h3>

          <h3>Shipping Information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "80%" }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "80%" }}
              />
            </div>
            <div>
              <textarea
                placeholder="Shipping Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "80%", height: "100px" }}
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              type="submit"
              style={{
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
                marginTop: "1rem",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#28a745",
                color: "#fff",
                cursor: "pointer",
                transition: "background-color 0.3s ease"
              }}
            >
              Confirm Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
 