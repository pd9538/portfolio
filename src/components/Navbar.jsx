import React, { useState, useEffect } from "react";
import "../App.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home"); // Track the active section

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "qualification", "skill", "portfolio", "contact"];
            let currentSection = "home";

            // Loop through sections to find the current visible section
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop - 200; // Adjust offset as needed
                    const sectionHeight = element.offsetHeight;
                    const scrollPosition = window.scrollY;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);

            // Handle Navbar Background on Scroll
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const sectionTop = aboutSection.offsetTop;
                const scrollPosition = window.scrollY + 100; // Adjust scroll threshold if needed
                setIsScrolled(scrollPosition >= sectionTop);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar fixed-top shadow-sm navbar-expand-lg ${isScrolled ? "bg-light navbar-light" : "d-none"
                } py-3 py-lg-0 px-lg-5`}
        >
            <a href="#home" className="navbar-brand ml-lg-3">
                <img
                    src="/img/logo.png" // Replace "logo.png" with the name of your logo file
                    alt="Logo"
                    style={{ height: "75px" }} // Adjust the height of the logo
                />
            </a>
            <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <a
                        href="#home"
                        className={`nav-item nav-link ${activeSection === "home" ? "active" : ""}`}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={`nav-item nav-link ${activeSection === "about" ? "active" : ""}`}
                    >
                        About
                    </a>
                    <a
                        href="#qualification"
                        className={`nav-item nav-link ${activeSection === "qualification" ? "active" : ""}`}
                    >
                        Quality
                    </a>
                    <a
                        href="#skill"
                        className={`nav-item nav-link ${activeSection === "skill" ? "active" : ""}`}
                    >
                        Skill
                    </a>
                    <a
                        href="#portfolio"
                        className={`nav-item nav-link ${activeSection === "portfolio" ? "active" : ""}`}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        className={`nav-item nav-link ${activeSection === "contact" ? "active" : ""}`}
                    >
                        Contact
                    </a>
                </div>
                <a href="#contact" className="btn btn-outline-primary d-none d-lg-block">
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
