import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import logo from "../Sk_engineering/images_nav/logo.jpg";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} width={120} className="rounded-1" alt={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="toggle-bg">
            <Nav.Link className="me-auto-nav">
              <Link to='/' className="link1"> Home</Link>
             
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
            <Nav className='flex-1'>
            <Nav.Link href="" className="me-auto-nav">
              <i class="fa-brands fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="" className="me-auto-nav">
              <i class="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="" className="me-auto-nav">
              <i class="fa-brands fa-linkedin"></i>
            </Nav.Link>
            </Nav>
          </Nav>
          {/* <Nav className='flex-1'>
            
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
