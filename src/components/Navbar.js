import React from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Start Chatting!", path: "/chat" },
  { label: "Settings", path: "/settings" },
  { label: "About Us", path: "/about" },
  { label: "Memberships", path: "/memberships" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: 24, background: "#fff", boxShadow: "0 1px 6px #eee"
    }}>
      <Link to="/" style={{ fontWeight: 700, fontSize: 28, color: "#28b0a9", textDecoration: "none" }}>
        <span role="img" aria-label="alert">🚨</span> Allergy Alert
      </Link>
      <nav>
        {tabs.map(tab => (
          <Link
            key={tab.path}
            to={tab.path}
            style={{
              background: location.pathname === tab.path ? "#28b0a9" : "#fff",
              color: location.pathname === tab.path ? "#fff" : "#333",
              border: "none",
              borderRadius: 16,
              padding: "8px 20px",
              marginLeft: 8,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 1px 3px #eee",
              textDecoration: "none",
              transition: "background 0.2s"
            }}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
