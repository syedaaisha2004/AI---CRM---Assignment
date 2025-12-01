import React, { useState } from "react";

export default function LogInteractionScreen() {
  const [formData, setFormData] = useState({
    hcp_name: "",
    date: "",
    summary: "",
  });

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontWeight: "bold" }}>Log Interaction</h2>

      <input
        placeholder="HCP Name"
        style={{ padding: 8, marginTop: 10, width: "100%" }}
        onChange={(e) => setFormData({ ...formData, hcp_name: e.target.value })}
      />

      <input
        type="date"
        style={{ padding: 8, marginTop: 10, width: "100%" }}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />

      <textarea
        placeholder="Summary"
        style={{ padding: 8, marginTop: 10, width: "100%" }}
        onChange={(e) =>
          setFormData({ ...formData, summary: e.target.value })
        }
      />

      <button style={{ padding: 10, marginTop: 15, backgroundColor: "blue", color: "white" }}>
        Submit Interaction
      </button>
    </div>
  );
}