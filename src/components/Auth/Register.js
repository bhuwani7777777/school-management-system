import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully (demo)");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center fw-bold mb-4">Register</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

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

        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
