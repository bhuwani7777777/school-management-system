import React from "react";

const teachers = [
  {
    name: "Mr. Ramesh Adhikari",
    subject: "Principal",
    qualification: "M.Ed, Education Management",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ms. Sita Sharma",
    subject: "English Teacher",
    qualification: "M.A. English",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Bikash Thapa",
    subject: "Mathematics Teacher",
    qualification: "M.Sc. Mathematics",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ms. Anjali Rai",
    subject: "Science Teacher",
    qualification: "B.Sc., B.Ed",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Mr. Prakash Limbu",
    subject: "Computer Teacher",
    qualification: "BSc IT",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ms. Nirmala Karki",
    subject: "Social Studies Teacher",
    qualification: "M.A. Sociology",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const Teachers = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-3">Our Teachers</h2>
      <p className="text-center text-muted mb-5">
        Dedicated and experienced educators shaping young minds
      </p>

      <div className="row">
        {teachers.map((teacher, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 border-0 shadow-sm text-center">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="card-img-top"
                style={{
                  height: "260px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{teacher.name}</h5>
                <p className="text-primary mb-1">{teacher.subject}</p>
                <p className="text-muted small">{teacher.qualification}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
