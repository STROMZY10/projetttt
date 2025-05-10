import React, { useState } from "react";
import products from "../data/data";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: "url('/images/jpn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "5%",
        textAlign: "center"
      }}
    >
  
      <h1
        style={{
          fontSize: "3.5rem",
          color: "#DAA520",
          textShadow: "1px 1px 4px rgba(197, 0, 0, 0.7)",
          marginBottom: "1rem"
        }}
      >
        Luxury Watch Store by StozStore ⌚
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "1.5rem"
        }}
      >
        <img
          src="/images/usma.png"
          alt="Left"
          style={{
            maxWidth: "200px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}
        />
        <img
          src="/images/real.png"
          alt="Right"
          style={{
            maxWidth: "200px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}
        />
      </div>

    
      <input
        type="text"
        placeholder="Search watches..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          margin: "4rem auto",
          padding: "0.75rem",
          width: "80%",
          maxWidth: "350px",
          display: "block",
          border: "3px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <div className="grid" style={{ marginTop: "2rem" }}>
        {filtered.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
