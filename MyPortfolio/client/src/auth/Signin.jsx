import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Signin() {
  const { signin } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: ""
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signin", values);

      signin(res.data.user, res.data.token);

      window.location.href = "/"; // redirect home
    } catch (err) {
      setValues({ ...values, error: "Invalid email or password" });
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {values.error && <p style={{ color: "red" }}>{values.error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}
