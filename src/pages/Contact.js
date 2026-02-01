import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Golden Sunrise School!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead">
            Golden Sunrise Secondary English School, Gauradaha, Jhapa
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container my-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <h4 className="mb-3">Get in Touch</h4>
            <p>
              We would love to hear from parents, students, and visitors.
              Please feel free to contact us for admissions, inquiries, or
              general information.
            </p>

            <ul className="list-unstyled">
              <li className="mb-2">
                📍 <strong>Address:</strong> Gauradaha, Jhapa, Nepal
              </li>
              <li className="mb-2">
                📞 <strong>Phone:</strong> +977-XXXXXXXXXX
              </li>
              <li className="mb-2">
                📧 <strong>Email:</strong> goldensunriseschool@gmail.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4 className="mb-3">Send Us a Message</h4>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="container mb-5">
        <div className="ratio ratio-16x9 shadow rounded">
          <iframe
            title="Golden Sunrise School Location"
            src="https://www.google.com/maps?q=Gauradaha%20Jhapa%20Nepal&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
