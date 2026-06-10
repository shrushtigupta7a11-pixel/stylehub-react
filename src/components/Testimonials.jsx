export function Testimonials() {
  return (
    <div
      style={{
        padding: "60px",
        background: "#000000",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        What Customers Say
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={box}>
          <h3>★★★★</h3>
          <p>Amazing quality,fast delivery,reasonable prices.</p>
          <strong>Priya</strong>
        </div>

        <div style={box}>
          <h3>★★★★★</h3>
          <p>Best fashion store I've used.Styles for every occasion!</p>
          <strong>Rahul</strong>
        </div>

        <div style={box}>
          <h3>★★★</h3>
          <p>Trendy collection and great service.</p>
          <strong>Ananya</strong>
        </div>
      </div>
    </div>
  );
}

const box = {
  width: "250px",
  padding: "20px",
  background: "white",
  borderRadius: "15px",
};