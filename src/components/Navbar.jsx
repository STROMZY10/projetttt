import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">🛒 Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;
 