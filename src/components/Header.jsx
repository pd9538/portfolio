import React, { useEffect, useRef } from "react";
import "../App.css";
import profileImage from '../assets/img/profile3.png';

const Header = () => {
    const handleDownload = (event) => {
        event.preventDefault(); // Prevent the default anchor tag behavior
        const link = document.createElement('a'); // Create a link element
        link.href = '/file/Pranav Rajendra Deshmukh.pdf'; // Path to the file
        link.download = 'Pranav_Deshmukh.pdf'; // File name for download
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link);
    };

    const typedRef = useRef(null);
    useEffect(() => {
        if (window.Typed && typedRef.current) {
            new window.Typed(typedRef.current, {
                strings: ["Angular Developer", "Web Developer", "Front End Developer"], // Must be an array
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true,
            });
        }
    }, []);

    return (
        <>
        <div
            className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
            id="home"
            style={{ minHeight: "100vh" }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                        <img
                            className="img-fluid w-100 rounded-circle shadow-sm"
                            src={profileImage}
                            alt="Profile"
                        />
                    </div>
                    <div className="col-lg-7 text-center text-lg-left">
                        <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                        <h1
                            className="display-3 text-uppercase text-primary mb-2"
                            style={{ WebkitTextStroke: "2px #ffffff" }}
                        >
                            Pranav Deshmukh
                        </h1>
                        <h1 ref={typedRef} style={{ minHeight: "1em" }} aria-live="polite" aria-hidden="true" className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                        <div className="typed-text d-none">
                            Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <a href="/" className="btn btn-outline-light mr-5" onClick={handleDownload}>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;
