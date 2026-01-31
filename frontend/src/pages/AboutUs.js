import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary text-white text-center py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Golden Sunrise School</h1>
          <p className="lead">Empowering Students in Gauradaha, Jhapa, Nepal</p>
        </div>
      </section>

      {/* History Section */}
      <section className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300.png?text=School+Building"
              alt="School History"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Our History</h2>
            <p>
              Founded with a vision to provide quality education in Gauradaha, Jhapa,
              Golden Sunrise Secondary English School has nurtured thousands of students
              and built a strong academic reputation over the years.
            </p>
            <p>
              Our focus on holistic development, modern teaching methods, and extracurricular
              activities makes us one of the leading schools in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-light py-5">
        <div className="container text-center mb-5">
          <h2 className="mb-4">Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">Our Mission</h5>
                  <p className="card-text">
                    To provide holistic education encouraging students to excel academically,
                    morally, and socially while fostering lifelong learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">Our Vision</h5>
                  <p className="card-text">
                    To become a leading educational institution in Nepal, empowering students
                    to become responsible citizens and future leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mb-5">
        <h2 className="text-center mb-4">Our Core Values</h2>
        <div className="row text-center">
          {[
            { title: "Integrity", desc: "Upholding honesty and strong moral principles." },
            { title: "Excellence", desc: "Striving for the highest academic and personal standards." },
            { title: "Community", desc: "Promoting collaboration and social responsibility." },
            { title: "Innovation", desc: "Encouraging creativity and problem-solving skills." },
            { title: "Respect", desc: "Valuing every student, teacher, and member of our school family." }
          ].map((value, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-primary">{value.title}</h5>
                  <p className="card-text">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Image / Campus */}
      <section className="text-center my-5">
        <img
          src="https://via.placeholder.com/900x400.png?text=Golden+Sunrise+School+Campus"
          alt="School Campus"
          className="img-fluid rounded shadow"
        />
      </section>
    </div>
  );
};

export default AboutUs;
