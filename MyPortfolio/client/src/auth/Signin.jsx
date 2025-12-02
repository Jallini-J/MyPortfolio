import React, { useState } from "react";
import API from "../api";

export default function Signin() {
  const [values, setValues] = useState({
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
      const res = await fetch(`${API}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setValues({ ...values, error: data.error });
        return;
      }

      // Save token + user to browser
      localStorage.setItem("jwt", JSON.stringify(data));

      setValues({
        email: "",
        password: "",
        error: "",
        success: true,
      });

      // Redirect after login
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setValues({ ...values, error: "Signin failed. Try again." });
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Signin</h2>

      {values.error && <p style={{ color: "red" }}>{values.error}</p>}
      {values.success && <p style={{ color: "green" }}>Successfully logged in!</p>}

      <form onSubmit={handleSubmit}>
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
          Signin
        </button>
      </form>
    </div>
  );
}
