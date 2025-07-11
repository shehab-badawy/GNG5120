import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 600, margin: "48px auto", padding: 32, background: "#fff", borderRadius: 24, boxShadow: "0 2px 12px #e3e6e8" }}>
      <h1 style={{ color: "#176c7d" }}>Welcome to Allergy Alert!</h1>
      <p>Your AI-powered assistant for instant, reliable allergy help – from food and skin reactions to respiratory symptoms and more.</p>
      <Link to="/chat">
        <button
          style={{
            background: "#28b0a9",
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            borderRadius: 20,
            fontSize: 18,
            margin: "28px 0",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Start Chatting!
        </button>
      </Link>
      <p>
        Not sure if your symptoms are from an allergy? Chat with our AI or upload a photo (like a rash, food label, or medication) for smart, instant advice. <br />
        <b>If your symptoms are severe, seek immediate medical attention.</b>
      </p>
      <div style={{marginTop: "24px", background: "#f0f5f9", borderRadius: 12, padding: 16, display: "flex", alignItems: "center"}}>
        <span role="img" aria-label="photo" style={{fontSize: 32, marginRight: 16}}>📷</span>
        <span>Upload a photo (skin, food, packaging, etc.) for AI-based analysis.</span>
      </div>
    </main>
  );
}
