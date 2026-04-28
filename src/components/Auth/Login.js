import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);

    // Example redirect after login
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;