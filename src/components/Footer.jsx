import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Accordion flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About us</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/coffees">Our Coffees</Link>
              </li>
              <li>
                <Link to="corporate spcial responsibility">
                  Social impact & sustainability
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Contact us</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/careers">Careers at starbucks SA</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Starbucks Card</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/contact">Starbucks card</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <Facebook /> <Instagram /> <Twitter />
      <br />
      <br />
      <p>
        <Link to="#">Privacy policy</Link>
      </p>
      <p>
        <Link to="#">Terms of Use</Link>
      </p>
      <p>
        <Link to="#">Cookie Notice</Link>
      </p>
      <p>
        <Link to="#">Cookie policy</Link>
      </p>
    </>
  );
};

export default Footer;
