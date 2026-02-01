import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent (demo)");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center fw-bold mb-4">Forgot Password</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-warning w-100">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
