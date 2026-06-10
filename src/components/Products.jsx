export function Products() {
  return (
    <div style={{ padding: "60px" }}>
      <h2 style={{ textAlign: "center" }}>Featured Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        <div style={productCard}>
          <h3>Oversized Hoodie</h3>
          <p>₹1299</p>
        </div>

        <div style={productCard}>
          <h3>Premium Sneakers</h3>
          <p>₹2499</p>
        </div>

        <div style={productCard}>
          <h3>Denim Jacket</h3>
          <p>₹1899</p>
        </div>

        <div style={productCard}>
          <h3>Leather Bag</h3>
          <p>₹1599</p>
        </div>
      </div>
    </div>
  );
}

const productCard = {
  width: "220px",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(21, 0, 255, 0.6)",
  textAlign: "center",
};