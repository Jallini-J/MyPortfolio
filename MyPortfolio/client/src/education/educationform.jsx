import React, { useState } from "react";
import api from "../api";
import "./education.css";

export default function EducationForm({ onCreated }) {
  const [values, setValues] = useState({
    title: "",
    institution: "",
    year: "",
    description: "",
    error: "",
    success: false
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/education", values);

      if (res.status !== 201 && res.status !== 200) {
        setValues({ ...values, error: "Failed to add education" });
        return;
      }

      setValues({
        title: "",
        institution: "",
        year: "",
        description: "",
        error: "",
        success: true
      });

      onCreated(); // refresh list
    } catch (err) {
      setValues({ ...values, error: "Error adding education" });
    }
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Add Education</h2>

      {values.error && <p style={{ color: "red" }}>{values.error}</p>}
      {values.success && <p style={{ color: "green" }}>Added successfully!</p>}

      <form onSubmit={handleSubmit} className="education-card">
        <div className="education-field">
          <input
            name="title"
            placeholder="Title (e.g., BSc Computer Science)"
            value={values.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="education-field">
          <input
            name="institution"
            placeholder="Institution"
            value={values.institution}
            onChange={handleChange}
            required
          />
        </div>

        <div className="education-field">
          <input
            name="year"
            placeholder="Year (e.g., 2024)"
            value={values.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="education-field">
          <input
            name="description"
            placeholder="Description (optional)"
            value={values.description}
            onChange={handleChange}
          />
        </div>

        <button className="education-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
