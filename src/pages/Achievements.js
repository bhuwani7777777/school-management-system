import React from "react";

const achievements = [
  {
    title: "Outstanding SEE Results",
    description:
      "Golden Sunrise Secondary English School achieved a 100% pass rate in SEE with several students securing distinctions.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    title: "Annual Cultural Program",
    description:
      "Students actively participate in dance, music, drama, and cultural programs celebrating Nepalese traditions.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8e6f94f0c",
  },
  {
    title: "Inter-School Sports Championship",
    description:
      "Our students won medals in football, athletics, volleyball, and cricket at district-level competitions.",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1605719125065-3dd9c9a14a3c",
  },
  {
    title: "Science Exhibition & Projects",
    description:
      "Students showcased innovative science models and technology projects in annual science exhibitions.",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "Educational Tours & Programs",
    description:
      "Regular educational tours and field visits help students gain practical learning experiences.",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    title: "ICT & Computer Training",
    description:
      "Students receive hands-on computer training, coding basics, and digital literacy programs.",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const Achievements = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Achievements & Activities</h1>
          <p className="lead">
            Academic Excellence, Programs, and Sports Activities
          </p>
        </div>
      </section>

      {/* Achievements Content */}
      <section className="container my-5">
        <div className="row">
          {achievements.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <span className="badge bg-success">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
