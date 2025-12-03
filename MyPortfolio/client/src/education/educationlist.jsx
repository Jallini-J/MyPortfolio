import React, { useEffect, useState } from "react";
import api from "../api";
import "./education.css";

export default function EducationList() {
  const [items, setItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const loadItems = async () => {
    const res = await api.get("/api/education");
    setItems(res.data || []);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete item?")) return;

    await api.delete(`/api/education/${id}`);

    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  const isAdmin = user?.role === "admin";

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>

      {items.map((edu) => (
        <div key={edu._id} className="education-card">
          <p><strong>Title:</strong> {edu.title}</p>
          <p><strong>Institution:</strong> {edu.institution}</p>
          <p><strong>Year:</strong> {edu.year}</p>
          {edu.description && <p>{edu.description}</p>}

          {isAdmin && (
            <button
              className="education-btn education-delete"
              onClick={() => deleteItem(edu._id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
