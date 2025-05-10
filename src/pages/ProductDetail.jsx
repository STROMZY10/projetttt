import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    product.views += 1;
  }, [product]);

  const avgRating = (
    product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length || 0
  ).toFixed(1);

  const addReview = () => {
    if (comment) {
      product.reviews.push({ rating, comment });
      setComment("");
      setRating(5);
    }
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setButtonClicked(true);

       setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  return (
    <div className="detail" style={{ padding: "2rem", textAlign: "center" }}>
            <img
        src={product.image}
        alt={product.name}
        style={{
          display: "block",
          maxWidth: "90%",
          maxHeight: "400px",
          margin: "2rem auto",
          objectFit: "contain",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      />

           <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price} DZD</p>
      <p><strong>👁 Views:</strong> {product.views}</p>
      <p><strong>🛍 Sold:</strong> {product.sold}</p>
      <p><strong>⭐ Rating:</strong> {avgRating}</p>

      <button
        onClick={handleAddToCart}
        style={{
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          margin: "1rem 0",
          border: "none",
          borderRadius: "4px",
          backgroundColor: buttonClicked ? "#32cd32" : "#007bff",
          color: "#fff",
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          transform: buttonClicked ? "scale(1.05)" : "scale(1)", 
        }}
      >
        {buttonClicked ? "Added!" : "Add to Cart"} 
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h4>Customer Reviews</h4>
        {product.reviews.length > 0 ? (
          product.reviews.map((rev, i) => (
            <p key={i}>⭐ {rev.rating} - {rev.comment}</p>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h4>Add a Review</h4>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          placeholder="Rating (1-5)"
          style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "60px" }}
        />
        <br />
        <textarea
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          style={{ width: "80%", padding: "0.5rem", marginTop: "0.5rem" }}
        />
        <br />
        <button
          onClick={addReview}
          style={{
            padding: "0.5rem 1rem",
            marginTop: "0.5rem",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
 