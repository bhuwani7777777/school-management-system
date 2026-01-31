import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light text-center p-5">
        <h1 className="display-4">Welcome to School Management System</h1>
        <p className="lead">Manage students, teachers, and classes efficiently</p>
        <Link to="/students" className="btn btn-primary btn-lg mt-3">Get Started</Link>
      </section>

      {/* Features Section */}
      <section className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="card-text">Add, view, and manage all students in your school.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Teachers</h5>
                <p className="card-text">Keep track of teachers and subjects assigned to classes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Classes</h5>
                <p className="card-text">Manage classes, schedules, and student assignments easily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary text-white text-center p-5 mt-5">
        <h2>About Our System</h2>
        <p>
          This School Management System is designed to simplify administrative tasks,
          improve productivity, and help staff, teachers, and students interact efficiently.
        </p>
      </section>
    </div>
  );
};

export default Home;
