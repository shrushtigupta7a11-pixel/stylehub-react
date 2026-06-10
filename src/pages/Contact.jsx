export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#e11d48",
          }}
        >
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          style={input}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={input}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={input}
        ></textarea>

        <button
          style={{
            width: "100%",
            background: "#e11d48",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxSizing: "border-box",
};