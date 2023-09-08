import React, { useEffect, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import anime from 'animejs'; // Import anime.js
import './Navbar.css';

export const NavBar = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const animatePortfolio = () => {
      anime({
        targets: portfolioRef.current,
        opacity: [0.1, 1],        // Animate opacity from 0 to 1
        easing: 'easeInOutQuad',
        duration: 1500,         // Animation duration in milliseconds
        direction: 'alternate', // Alternate between fading in and out
        loop: true,             // Loop the animation
      });
    };

    animatePortfolio(); // Start the animation when the component mounts

    // Clean up the animation when the component unmounts
    return () => {
      anime.remove(portfolioRef.current);
    };
  }, []);

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary bg-black">
        <Container>
          <div className="container-flex-elements">
            <Navbar.Brand href="#home" className="portfolio-title" ref={portfolioRef}>
              Portfolio
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="nav-links-container">
                  <Nav.Link href="#home" className="navlink1">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#skills" className="navlink2">
                    Experience
                  </Nav.Link>
                  <Nav.Link href="#link" className="navlink3">
                    Projects
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
