import React from "react";

export default function SettingsPage() {
  return (
    <main style={{
      maxWidth: 900,
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
        Settings
      </div>
      <div style={{
        display: "flex",
        gap: 56,
        justifyContent: "center",
        marginTop: 32
      }}>
        {/* My Profile */}
        <div style={{
          flex: 1,
          background: "#f6f6f6",
          borderRadius: 18,
          boxShadow: "0 1px 5px #eee",
          padding: "26px 30px",
          minWidth: 230,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h3 style={{ fontWeight: 700, textAlign: "center", marginBottom: 18 }}>My Profile</h3>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>My History</li>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>My Subscription</li>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>My Search</li>
            <li style={{ fontSize: 16, fontWeight: 500 }}>My Favourites</li>
          </ul>
        </div>
        {/* System Settings */}
        <div style={{
          flex: 1,
          background: "#f6f6f6",
          borderRadius: 18,
          boxShadow: "0 1px 5px #eee",
          padding: "26px 30px",
          minWidth: 230,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h3 style={{ fontWeight: 700, textAlign: "center", marginBottom: 18 }}>System Settings</h3>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>Privacy Settings</li>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>Data Collection</li>
            <li style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>Notifications</li>
            <li style={{ fontSize: 16, fontWeight: 500 }}>My Login</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
