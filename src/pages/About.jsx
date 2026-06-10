export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        textAlign: "center",
        background: "#f8f9fa",
      }}
    >
      <h1 style={{ color: "#e11d48", fontSize: "3rem" }}>
        About StyleHub
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        StyleHub is a modern fashion destination that brings
        trendy clothing, premium accessories, and stylish
        footwear to fashion lovers across the country.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        <div style={card}>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div style={card}>
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div style={card}>
          <h2>50+</h2>
          <p>Fashion Brands</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "30px",
  width: "200px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};