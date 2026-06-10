export function Categories() {
  return (
    <div style={{ padding: "60px" }}>
      <h2 style={{ textAlign: "center" }}>Shop By Category</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={card}>👗 Women's Wear</div>
        <div style={card}>👔 Men's Wear</div>
        <div style={card}>👟 Footwear</div>
        <div style={card}>👜 Accessories</div>
      </div>
    </div>
  );
}

const card = {
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(226, 0, 251, 0.26)",
  width: "180px",
  textAlign: "center",
};