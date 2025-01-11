import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const portfolioData = [
  { id: 1, category: "first", image: "img/portfolio1.jpg" },
  { id: 2, category: "second", image: "img/portfolio2.jpg" },
  { id: 3, category: "third", image: "img/portfolio3.jpg" },
];

const Portfolio = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Gallery
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Portfolio
          </h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            {/* Filter section removed */}
          </div>
        </div>
        <div className="row portfolio-container">
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category}`}
            >
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src={item.image}
                  alt="Portfolio"
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: "pointer" }}
                />
                <div className="portfolio-btn bg-transparent d-flex align-items-center justify-content-center">
                 <a href="https://github.com/pd9538">
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: "60px",cursor:"pointer" }}
                  ></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={portfolioData.map((item) => ({
            src: item.image,
          }))}
          index={lightboxIndex}
        />
      </div>
    </div>
  );
};

export default Portfolio;
