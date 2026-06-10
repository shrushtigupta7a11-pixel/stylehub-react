export function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        background: "linear-gradient(135deg,#111827,#374151)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>
        NEW COLLECTION 2026
      </h1>

      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Discover Fashion That Defines You
      </p>

      <button
        style={{
          marginTop: "25px",
          background: "#e11d48",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}