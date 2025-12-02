import React, { useState } from "react";
import API from "../api";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status !== 201) {
        setValues({ ...values, error: data.error, success: false });
        return;
      }

      setValues({
        name: "",
        email: "",
        password: "",
        error: "",
        success: true,
      });
    } catch (err) {
      console.log(err);
      setValues({ ...values, error: "Signup failed. Try again." });
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Signup</h2>

      {values.error && <p style={{ color: "red" }}>{values.error}</p>}
      {values.success && <p style={{ color: "green" }}>Account created!</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}
