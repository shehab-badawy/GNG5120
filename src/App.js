import React, { useState } from "react";

const tabs = [
  { label: "Start Chatting!", value: "chat" },
  { label: "About Us", value: "about" },
  { label: "Memberships", value: "membership" },
];

function HomePage() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 24, background: "#fff", boxShadow: "0 1px 6px #eee" }}>
        <div style={{ fontWeight: 700, fontSize: 24, color: "#30aabc" }}>
          SkinHelp
        </div>
        <nav>
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                background: activeTab === tab.value ? "#30aabc" : "#fff",
                color: activeTab === tab.value ? "#fff" : "#333",
                border: "none",
                borderRadius: 16,
                padding: "8px 20px",
                marginLeft: 8,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 1px 3px #eee",
                transition: "background 0.2s"
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: 600, margin: "48px auto", padding: 32, background: "#fff", borderRadius: 24, boxShadow: "0 2px 12px #e3e6e8" }}>
        {activeTab === "chat" && (
          <>
            <h1 style={{ color: "#1a6b77" }}>Welcome to SkinHelp!</h1>
            <p>Your AI-powered assistant for skin allergy relief.</p>
            <button
              style={{
                background: "#30aabc",
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
            <p>Not sure what’s going on with your skin? Chat with our AI to get advice on safe, over-the-counter treatments. If you experience severe symptoms, please contact a healthcare professional immediately.</p>
          </>
        )}

        {activeTab === "about" && (
          <>
            <h2>About Us</h2>
            <p>We’re a team dedicated to making allergy care accessible. Our chatbot gives friendly, trustworthy advice for common skin allergy problems.</p>
          </>
        )}

        {activeTab === "membership" && (
          <>
            <h2>Memberships</h2>
            <p>Become a member to access premium features, priority support, and more (coming soon!).</p>
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;
