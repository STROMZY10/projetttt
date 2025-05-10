import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="item-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price} DZD</p>
      {product.views < 10 && <span className="badge">New Arrival</span>}
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
 