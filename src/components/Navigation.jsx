import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GeoAltFill } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="images/starbucks_logo.png"
              alt="starbucks_logo"
              style={{ height: "60px", borderRadius: "50%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-md"}
            aria-labelledby={"offcanvasNavbarLabel-expand-md"}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/coffees">
                  Our Coffees
                </Nav.Link>
                <Nav.Link as={NavLink} to="/delivers">
                  Delivers
                </Nav.Link>
                <Nav.Link as={NavLink} to="/rewards">
                  Rewards
                </Nav.Link>
                <Nav.Link as={Link} to="#" className="ms-auto">
                  <GeoAltFill /> Find a store
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
