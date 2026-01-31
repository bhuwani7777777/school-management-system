import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5">
        <h1 className="display-4">Golden Sunrise Secondary English School</h1>
        <p className="lead">Gauradaha, Jhapa, Nepal</p>
        <a href="#about" className="btn btn-light btn-lg mt-3">Learn More</a>
      </section>

      {/* About Section */}
      <section id="about" className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300.png?text=Golden+Sunrise+School"
              alt="School"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>About Our School</h2>
            <p>
              Golden Sunrise Secondary English School, located in Gauradaha, Jhapa,
              is committed to providing quality education in a nurturing environment.
              We focus on academic excellence, extracurricular development, and
              preparing students for a bright future.
            </p>
            <p>
              Our school is equipped with modern classrooms, a library, sports facilities,
              and experienced teachers who guide students with dedication and care.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Our Facilities</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Library</h5>
                  <p className="card-text">A well-stocked library to support students’ learning.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sports & Activities</h5>
                  <p className="card-text">Playgrounds and sports programs to promote health and teamwork.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Modern Classrooms</h5>
                  <p className="card-text">Smart classrooms with interactive learning tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p><strong>Address:</strong> Gauradaha, Jhapa, Nepal</p>
            <p><strong>Phone:</strong> +977-XXXXX-XXXXX</p>
            <p><strong>Email:</strong> info@goldensunrise.edu.np</p>
            <iframe
              title="school-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.XXXXXX!2d87.0XXXX!3d26.6XXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e7XXXXXX!2sGolden%20Sunrise%20School!5e0!3m2!1sen!2snp!4v161XXXXXX"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
