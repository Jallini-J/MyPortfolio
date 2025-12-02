import React, { useState } from "react";
import API from "../api";
import "./education.css";

export default function EducationForm({ onCreated }) {
  const [values, setValues] = useState({
    school: "",
    degree: "",
    year: "",
    error: "",
    success: false
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const jwt = JSON.parse(localStorage.getItem("jwt"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/education`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt?.token}`
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      if (!res.ok) {
        setValues({ ...values, error: data.error });
        return;
      }

      setValues({
        school: "",
        degree: "",
        year: "",
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
            name="school"
            placeholder="School"
            value={values.school}
            onChange={handleChange}
            required
          />
        </div>

        <div className="education-field">
          <input
            name="degree"
            placeholder="Degree / Program"
            value={values.degree}
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

        <button className="education-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
