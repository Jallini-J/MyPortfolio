import React, { useEffect, useState } from "react";
import API from "../api";
import "./education.css";

export default function EducationList() {
  const [items, setItems] = useState([]);
  const jwt = JSON.parse(localStorage.getItem("jwt"));

  const loadItems = async () => {
    const res = await fetch(`${API}/education`);
    const data = await res.json();
    setItems(data);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete item?")) return;

    await fetch(`${API}/education/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt?.token}`
      }
    });

    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  const isAdmin = jwt?.user?.role === "admin";

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>

      {items.map((edu) => (
        <div key={edu._id} className="education-card">
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Degree:</strong> {edu.degree}</p>
          <p><strong>Year:</strong> {edu.year}</p>

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
