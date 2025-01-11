// src/components/Qualification.js

import React from 'react';

const Qualification = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>
            Quality
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-4">My Education</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {/* Repeat for each education */}
              <div className="position-relative mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                <h5 className="font-weight-bold mb-1">Master In Computer Science</h5>
                <p className="mb-2"><strong>Pune University</strong> | <small>2016 - 2018</small></p>
                <p>Gained expertise in web development. Developed problem-solving and teamwork skills through collaborative projects.</p>
              </div>
              {/* <div className="position-relative mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                <h5 className="font-weight-bold mb-1">Bachelor In Computer Science</h5>
                <p className="mb-2"><strong>Pune University</strong> | <small>2012 - 2015</small></p>
                <p>Specialized in Computer Science and Engineering, with coursework in Java and Web Development.</p>
              </div> */}
              {/* More Education Entries */}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">My Experience</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {/* Repeat for each experience */}
              <div className="position-relative mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                <h5 className="font-weight-bold mb-1">Angular Developer</h5>
                <p className="mb-2"><strong>PNS Infotech Pvt Ltd.</strong> | <small>2023 - till now</small></p>
                <p>Worked on a recharge software platform, implementing dynamic UI components and optimizing application performance using Angular.</p>
              </div>
              {/* More Experience Entries */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
