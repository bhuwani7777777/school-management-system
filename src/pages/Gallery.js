import React from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "School Campus",
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title: "Classroom Learning",
  },
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Students in Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
    title: "School Library",
  },
  {
    url: "https://images.unsplash.com/photo-1544717305-996b815c338c",
    title: "Computer Lab",
  },
  {
    url: "https://images.unsplash.com/photo-1605719125065-3dd9c9a14a3c",
    title: "Sports Activities",
  },
];

const Gallery = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-3">School Gallery</h2>
      <p className="text-center text-muted mb-5">
        Moments from academic, cultural, and extracurricular activities
      </p>

      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={`${img.url}?auto=format&fit=crop&w=800&q=80`}
                alt={img.title}
                className="img-fluid rounded"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="mb-0">{img.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
