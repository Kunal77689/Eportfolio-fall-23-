import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="container-flex-elements">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="nav-links-container">
                  <Nav.Link href="#home" className="navlink1">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#skills" className="navlink2">
                    Skills
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
