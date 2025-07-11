import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { BASE_URL } from "../config";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help with your allergy concern? You can type your question or upload a photo." }
  ]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const fileInputRef = useRef();

  // Handle image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Send text/image to backend
  const handleSend = async () => {
    if (!input.trim() && !image) return;
    setIsSending(true);

    // Add user's message to chat
    setMessages(prev => [
      ...prev,
      { from: "user", text: input, image: imagePreview }
    ]);

    // Prepare FormData
    const formData = new FormData();
    if (input.trim()) formData.append("text", input);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { from: "bot", text: data.response }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Sorry, there was an error contacting the assistant." }
      ]);
    }
    setIsSending(false);
    setInput("");
    setImage(null);
    setImagePreview(null);
  };

  return (
    <main style={{
      maxWidth: 650, margin: "40px auto", padding: 0, background: "#fff",
      borderRadius: 18, boxShadow: "0 2px 16px #e3e6e8"
    }}>
      {/* Chat body */}
      <div style={{
        minHeight: 480,
        padding: "28px 18px 16px 18px",
        background: "#fcfcfc",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              maxWidth: "78%",
              background: msg.from === "user" ? "#e6faf8" : "#e9f1f7",
              borderRadius: 16,
              marginBottom: 2,
              padding: "13px 18px",
              boxShadow: "0 1px 5px #eee"
            }}
          >
            {msg.image && (
              <img
                src={msg.image}
                alt="User upload"
                style={{ maxWidth: 160, maxHeight: 160, display: "block", borderRadius: 8, marginBottom: 8 }}
              />
            )}
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {isSending && (
          <div style={{ alignSelf: "flex-end", color: "#aaa", fontSize: 14 }}>Sending...</div>
        )}
      </div>
      {/* Input */}
      <div style={{
        padding: "18px 18px 14px 18px",
        borderTop: "1px solid #f0f0f0",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        {imagePreview && (
          <div style={{ marginBottom: 10 }}>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 8 }} />
            <button onClick={() => { setImage(null); setImagePreview(null); }} style={{
              marginLeft: 14, background: "#f6f6f6", border: "none", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer"
            }}>Remove</button>
          </div>
        )}
        <div style={{ display: "flex", gap: 7 }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isSending}
            style={{
              flex: 1,
              padding: "11px 15px",
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 16
            }}
            onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            disabled={isSending}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            disabled={isSending}
            style={{
              background: "#fff", border: "1px solid #ccc", borderRadius: 10,
              fontWeight: 600, padding: "0 13px", fontSize: 18, cursor: "pointer"
            }}
            title="Upload an image"
          >
            📷
          </button>
          <button
            onClick={handleSend}
            disabled={isSending}
            style={{
              background: "#28b0a9", color: "#fff",
              border: "none", borderRadius: 10, fontWeight: 700, fontSize: 17,
              padding: "10px 24px", marginLeft: 6, cursor: "pointer"
            }}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
