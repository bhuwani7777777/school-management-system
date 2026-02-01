import React from "react";

const teachers = [
  {
    name: "Mr. Ram Sharma",
    subject: "Mathematics",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Ms. Sita Karki",
    subject: "English",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    name: "Mr. Hari Adhikari",
    subject: "Science",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

const Teachers = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Our Teachers</h2>

      <div className="row">
        {teachers.map((teacher, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center shadow h-100">
              <img
                src={teacher.image}
                className="card-img-top"
                alt={teacher.name}
              />
              <div className="card-body">
                <h5 className="card-title">{teacher.name}</h5>
                <p className="text-muted">{teacher.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
