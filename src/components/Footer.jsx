import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Luxury Watch Store. By StozStore .</p>
      <p>Contact: StozStore@algerianstore.dz | Phone: +213 797954816</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem"
  }
};

export default Footer;
 