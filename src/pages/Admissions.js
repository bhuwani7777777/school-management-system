import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission form submitted successfully!");
    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      grade: "",
      message: "",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Admission Application</h2>

      <form className="card shadow p-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Parent / Guardian Name</label>
            <input
              type="text"
              className="form-control"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Applying Grade</label>
          <select
            className="form-select"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>1 – 5</option>
            <option>6 – 8</option>
            <option>9 – 10</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="btn btn-success w-100">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Admissions;
