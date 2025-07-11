import React from "react";

// You can use require/import for local images or just put a link in the photo field.
const team = [
  {
    name: "Yonis Elmi",
    photo: "/images/yonis.jpg", // Place yonis.jpg in public/images or use a URL
    department: "Mechanical Engineering",
  },
  {
    name: "Ginger Pakru",
    photo: "/images/ginger.jpg",
    department: "Biomedical Mechanical Engineering",
  },
  {
    name: "Ali Gohar",
    photo: "/images/ali.jpg",
    department: "Mechanical Engineering",
  },
  {
    name: "Shehab Radwan",
    photo: "/images/shehab.jpg",
    department: "Electrical and Computer Engineering",
  },
  {
    name: "Ahmed Hashim",
    photo: "/images/ahmed.jpg",
    department: "Electrical and Computer Engineering",
  },
];

export default function AboutPage() {
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
        About Us
      </div>
      <div style={{
        marginTop: 24,
        background: "#f0f5f9",
        borderRadius: 14,
        padding: 18,
        fontSize: 18,
        fontWeight: 500,
        textAlign: "center",
        color: "#222"
      }}>
        We’re a team dedicated to making allergy care accessible. Our chatbot gives friendly, reliable advice for common allergy conditions.
      </div>
      <div style={{ margin: "40px 0 0 0", display: "flex", gap: 30, justifyContent: "center", flexWrap: "wrap" }}>
        {team.map(member => (
          <div key={member.name} style={{
            background: "#f3f3f3",
            borderRadius: 18,
            boxShadow: "0 1px 5px #eee",
            width: 165,
            padding: "24px 12px 18px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: 76, height: 76,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #e5e5e5",
                marginBottom: 14,
                background: "#fff"
              }}
              onError={e => e.target.src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
            />
            <div style={{ fontWeight: 700, marginBottom: 5, fontSize: 16 }}>{member.name}</div>
            <div style={{ fontSize: 14, color: "#444", marginBottom: 2 }}>uOttawa</div>
            <div style={{ fontSize: 14, color: "#555" }}>{member.department}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
