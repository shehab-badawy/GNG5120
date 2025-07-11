import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import AboutPage from "./pages/AboutPage";
import MembershipsPage from "./pages/MembershipsPage";
import SettingsPage from "./pages/SettingsPage";


function App() {
  return (
    <Router>
      <div style={{ fontFamily: "sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
