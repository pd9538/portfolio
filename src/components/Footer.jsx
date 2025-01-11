import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  // Toggle Back to Top button visibility
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsBackToTopVisible(true);
    } else {
      setIsBackToTopVisible(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="container text-center py-5">
        {/* Social Media Links */}
        <div className="d-flex justify-content-center mb-4">

          <a className="btn btn-light btn-social mr-2" href="https://www.facebook.com/share/1GcviDjyGc/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/pranav-d-13719b106">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-light btn-social" href="https://www.instagram.com/pd9538.official?igsh=MXM0dzF4MXo0ZnljYQ==">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Privacy Links */}
        {/* <div className="d-flex justify-content-center mb-3">
          <a className="text-white" href="#privacy">
            Privacy
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#terms">
            Terms
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#faqs">
            FAQs
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#help">
            Help
          </a>
        </div> */}

        {/* Copyright */}
        <p className="m-0">
          &copy; <a className="text-white font-weight-bold" href="#home">pdangular.dev</a>. All Rights Reserved. Designed by{" "}
          <a className="text-white font-weight-bold" href="https://pdangular.dev">
            CodeCraft by Pranav
          </a>
        </p>
      </div>

      {/* Scroll Buttons */}
      <div>
        {/* Scroll to Bottom */}
        <div
          onClick={scrollToBottom}
          className="fa fa-2x fa-angle-down text-white scroll-to-bottom"
          style={{
            cursor: "pointer",
            position: "fixed",
            bottom: "80px",
            right: "20px",
            zIndex: 1000,
          }}
        ></div>

        {/* Back to Top */}
        {isBackToTopVisible && (
          <div
            onClick={scrollToTop}
            className="btn btn-outline-dark px-0 back-to-top"
            style={{
              cursor: "pointer",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <i className="fa fa-angle-double-up back-to-top"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
