export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#e11d48" }}>STYLEHUB</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
        <a href="/products" style={{ textDecoration: "none", color: "black" }}>Shop</a>
        <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a>
        <a href="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
      </div>

      <button
        style={{
          background: "#e11d48",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Sign Up
      </button>
    </nav>
  );
}