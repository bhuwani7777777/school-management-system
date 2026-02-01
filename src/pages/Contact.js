import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>

      <form className="card shadow p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            name="message"
            value={data.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
