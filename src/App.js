import React, { useState } from "react";

const tabs = [
  { label: "Start Chatting!", value: "chat" },
  { label: "About Us", value: "about" },
  { label: "Memberships", value: "membership" },
];

function App() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 24, background: "#fff", boxShadow: "0 1px 6px #eee" }}>
        <div style={{ fontWeight: 700, fontSize: 28, color: "#28b0a9" }}>
          <span role="img" aria-label="alert">🚨</span> Allergy Alert
        </div>
        <nav>
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                background: activeTab === tab.value ? "#28b0a9" : "#fff",
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
            <h1 style={{ color: "#176c7d" }}>Welcome to Allergy Alert!</h1>
            <p>Your AI-powered assistant for instant, reliable allergy help – from food and skin reactions to respiratory symptoms and more.</p>
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
            <p>
              Not sure if your symptoms are from an allergy? Chat with our AI or upload a photo (like a rash, food label, or medication) for smart, instant advice. <br />
              <b>If your symptoms are severe, seek immediate medical attention.</b>
            </p>
            <div style={{marginTop: "24px", background: "#f0f5f9", borderRadius: 12, padding: 16, display: "flex", alignItems: "center"}}>
              <span role="img" aria-label="photo" style={{fontSize: 32, marginRight: 16}}>📷</span>
              <span>Upload a photo (skin, food, packaging, etc.) for AI-based analysis.</span>
            </div>
          </>
        )}

        {activeTab === "about" && (
          <>
            <h2>About Allergy Alert</h2>
            <p>
              Allergy Alert is a smart web assistant designed to help people of all ages get quick, personalized advice on allergy symptoms—whether it's food, skin, pollen, medication, or something else.
            </p>
            <ul>
              <li>Chatbot powered by advanced AI language models</li>
              <li>Photo analysis for rashes, ingredient labels, and more</li>
              <li>Always prioritizes safety—see a doctor for emergencies!</li>
            </ul>
          </>
        )}

        {activeTab === "membership" && (
          <>
            <h2>Memberships</h2>
            <p>
              Become a member to access extra features like priority AI support, health tips, or allergy tracking (coming soon).
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
