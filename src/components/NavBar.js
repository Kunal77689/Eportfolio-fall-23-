import React, { useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import anime from "animejs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import Link and animateScroll
import "./Navbar.css";

export const NavBar = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const animatePortfolio = () => {
      anime({
        targets: portfolioRef.current,
        opacity: [0.1, 1],
        easing: "easeInOutQuad",
        duration: 1500,
        direction: "alternate",
        loop: true,
      });
    };

    animatePortfolio();

    return () => {
      anime.remove(portfolioRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
    });
  };

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary bg-black">
        <Container>
          <div className="container-flex-elements">
            <Navbar.Brand className="portfolio-title" ref={portfolioRef}>
              Portfolio
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="nav-links-container">
                  <ScrollLink
                    to="home"
                    smooth={true}
                    className="navlink1"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    to={"experience"}
                    smooth={true}
                    className="navlink2"
                    onClick={() => scrollToSection("experience")}
                  >
                    Experience
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    className="navlink3"
                    onClick={() => scrollToSection("projects")}
                  >
                    Projects
                  </ScrollLink>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
