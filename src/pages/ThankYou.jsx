import React from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const { state } = useLocation(); 
  const { name, phone, address, total } = state || {};

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎉 Thank You for Your Purchase See You Next Time ❤️</h1>
      <p>We appreciate your order and hope you enjoy your new watch</p>
      {name && phone && address && total ? (
        <div>
            <h3>Order Details</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Total:</strong> {total} DZD</p>
        </div>
      ) : (
        <p>No order details found.</p>
      )}
    </div>
  );
};
export default ThankYou;
