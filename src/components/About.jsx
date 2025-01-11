import React from "react";
import aboutImage from "../assets/img/about1.jpg"; // Adjust the path based on your project structure

const AboutComponent = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        {/* Section Heading */}
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>

        {/* About Section */}
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid rounded w-100"
              src={aboutImage}
              alt="About Me"
            />
          </div>

          {/* Info Section */}
          <div className="col-lg-7">
            <h3 className="mb-4">Angular Developer</h3>
            <p style={{textAlign:'justify'}}>
            I am Pranav Rajendra Deshmukh, a passionate Angular Developer with 2 years of experience in creating dynamic, responsive web applications. I specialize in front-end development, delivering user-friendly and scalable solutions. My expertise lies in Angular, TypeScript, and JavaScript, and I thrive on solving complex problems and learning new technologies. I’m dedicated to crafting clean, efficient code and collaborating to bring innovative ideas to life.
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Name: <span className="text-secondary">Pranav R Deshmukh</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Birthday: <span className="text-secondary">24<sup>th</sup> July 1995</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Degree: <span className="text-secondary">Master</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience: <span className="text-secondary">2 Years</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Phone: <span className="text-secondary">+91 955 276 0938</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email:{" "}
                  <span className="text-secondary">pranavdeshmukh95@gmail.com</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Address:{" "}
                  <span className="text-secondary">
                    Ahilyanagar
                  </span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Freelance: <span className="text-secondary">Available</span>
                </h6>
              </div>
            </div>
            <a href="#contact" className="btn btn-outline-primary mr-4">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
