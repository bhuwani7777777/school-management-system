import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful (demo)");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center fw-bold mb-4">Login</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">Login</button>

        <div className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="text-center mt-2">
          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
