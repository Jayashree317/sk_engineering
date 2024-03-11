import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Sk_engineering/images_nav/logo.jpg";
import "./App.css"; // Import custom CSS file

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <Navbar
        bg="primary" // Set navbar background color to blue
        variant="dark"
        expand="lg"
        className="bg-1"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo}  className="rounded-1" alt={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
      
            onClick={toggleNavbar}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="me-auto-nav">
                Home
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                About us
              </Nav.Link>
              <NavDropdown title="Product" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sheets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Tubes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Shutter</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">louver</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Ventilators
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Sections</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Strip</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Roofing Accessories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className="me-auto-nav">
                Color range
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                Specification
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                Clients
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                Contact us
              </Nav.Link>
              <Nav className="move">
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-facebook"></i>
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-twitter"></i>
              </Nav.Link>
            </Nav>
            </Nav>
            {/* <Nav className="move">
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-facebook"></i>
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="" className="me-auto-nav">
                <i class="fa-brands fa-twitter"></i>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        fluid
        className={`content-container ${isNavbarOpen ? "open" : ""}`}
      >
        {/* <p>Main content goes here...</p> */}
      </Container>
    </div>
  );
}

export default App;
