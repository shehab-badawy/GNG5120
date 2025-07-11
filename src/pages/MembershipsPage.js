import React from "react";

const plans = [
  {
    name: "Basic",
    features: [
      "5 Free Messages with Chatbot (No speech to text, upload, or camera capability)",
      "Search for Health Professionals",
      "Book & Schedule Appointments (5 - 10 business days)"
    ],
    button: "Start Basic Plan"
  },
  {
    name: "Standard",
    features: [
      "25 Free Messages with Chatbot (No speech to text, upload, or camera capability)",
      "Search for Health Professionals",
      "Book & Schedule Appointments (3 - 5 business days)"
    ],
    button: "Start Standard Plan"
  },
  {
    name: "Unlimited",
    features: [
      "Unlimited Messages with Chatbot",
      "Search for Health Professionals",
      "Book & Schedule Appointments (1 - 2 business days)"
    ],
    button: "Start Unlimited Plan"
  }
];

export default function MembershipsPage() {
  return (
    <main style={{
      maxWidth: 950,
      margin: "48px auto",
      background: "#fff",
      borderRadius: 24,
      boxShadow: "0 2px 12px #e3e6e8",
      padding: "32px 40px"
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 18,
        background: "#28b0a9",
        color: "#fff",
        borderRadius: 20,
        padding: "10px 18px",
        display: "inline-block"
      }}>
        Memberships
      </div>
      <div style={{
        display: "flex",
        gap: 36,
        justifyContent: "center",
        marginTop: 32
      }}>
        {plans.map(plan => (
          <div key={plan.name}
            style={{
              flex: 1,
              background: "#f6f6f6",
              borderRadius: 18,
              boxShadow: "0 1px 5px #eee",
              padding: "26px 18px",
              minWidth: 240,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <h3 style={{ fontWeight: 700, textAlign: "center", marginBottom: 12 }}>{plan.name}</h3>
            <ul style={{ margin: 0, paddingLeft: 18, minHeight: 110 }}>
              {plan.features.map((f, i) => (
                <li key={i} style={{ fontSize: 15, marginBottom: 6 }}>{f}</li>
              ))}
            </ul>
            <button style={{
              margin: "20px auto 0",
              display: "block",
              background: "#fff",
              color: "#28b0a9",
              fontWeight: 600,
              padding: "10px 18px",
              border: "none",
              borderRadius: 12,
              boxShadow: "0 1px 2px #ddd",
              cursor: "pointer",
              fontSize: 15
            }}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
