import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-school.jpg";


const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
<section
  className="text-white text-center d-flex align-items-center"
  style={{
    minHeight: "90vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    <h1 className="fw-bold display-4">
      Golden Sunrise Secondary English School
    </h1>
    <p className="lead mt-3">
      Gauradaha, Jhapa, Nepal <br />
      Shaping Future Leaders with Quality Education
    </p>
    <div className="mt-4">
      <Link to="/about" className="btn btn-warning btn-lg me-3">
        Learn More
      </Link>
      <Link to="/contact" className="btn btn-outline-light btn-lg">
        Contact Us
      </Link>
    </div>
  </div>
</section>



      {/* WHY CHOOSE US */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <h5>Qualified Teachers</h5>
              <p className="text-muted">
                Experienced and dedicated teaching staff focused on student
                success.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Modern Education</h5>
              <p className="text-muted">
                Smart classes, computer education, and practical learning.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Safe Environment</h5>
              <p className="text-muted">
                Discipline, care, and student-friendly learning atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMICS & ACTIVITIES */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          Academics & Student Life
        </h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                className="card-img-top"
                alt="Academics"
              />
              <div className="card-body">
                <h5 className="card-title">Strong Academics</h5>
                <p className="card-text">
                  Well-structured curriculum for academic excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1605719125065-3dd9c9a14a3c"
                className="card-img-top"
                alt="Sports"
              />
              <div className="card-body">
                <h5 className="card-title">Sports</h5>
                <p className="card-text">
                  Football, athletics, and physical activities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1515165562835-c3b8e6f94f0c"
                className="card-img-top"
                alt="Programs"
              />
              <div className="card-body">
                <h5 className="card-title">Cultural Programs</h5>
                <p className="card-text">
                  Dance, music, drama, and social programs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                className="card-img-top"
                alt="Technology"
              />
              <div className="card-body">
                <h5 className="card-title">Technology</h5>
                <p className="card-text">
                  Computer education and digital literacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS PREVIEW */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Our Achievements</h2>
          <p className="lead mt-3">
            100% SEE results, district-level sports winners, and academic
            excellence.
          </p>
          <Link to="/achievements" className="btn btn-light mt-3">
            View Achievements
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold">Enroll Your Child Today</h2>
        <p className="text-muted mt-2">
          Give your child a strong foundation for a bright future.
        </p>
        <Link to="/contact" className="btn btn-success mt-3">
          Get Admission Info
        </Link>
      </section>
    </div>
  );
};

export default Home;
