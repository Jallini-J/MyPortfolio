import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    error: ""
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", values);
      setValues({ ...values, message: "Account created!", error: "" });
    } catch (err) {
      setValues({ ...values, error: "Failed to sign up" });
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      {values.error && <p style={{ color: "red" }}>{values.error}</p>}
      {values.message && <p style={{ color: "green" }}>{values.message}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
