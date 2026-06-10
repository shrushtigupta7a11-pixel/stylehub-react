export default function ProductsPage() {
  return (
    <div
      style={{
        padding: "60px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#e11d48",
        }}
      >
        Our Collection
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <div style={product}>
          <h3>Oversized Hoodie</h3>
          <p>₹1299</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={product}>
          <h3>Denim Jacket</h3>
          <p>₹1899</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={product}>
          <h3>Premium Sneakers</h3>
          <p>₹2499</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={product}>
          <h3>Leather Bag</h3>
          <p>₹1599</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={product}>
          <h3>Casual T-Shirt</h3>
          <p>₹899</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={product}>
          <h3>Stylish Watch</h3>
          <p>₹2999</p>
          <button style={btn}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

const product = {
  background: "white",
  padding: "25px",
  width: "220px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const btn = {
  background: "#e11d48",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};