import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const ERROR_PAGE = () => {
  return (
    <>
      <Container>
        <h1>
          <strong>404</strong>
        </h1>
        <p>Page not found !</p>
        <Link to="/">
          <Button variant="outline-success">Back to homepage</Button>
        </Link>
      </Container>
    </>
  );
};

export default ERROR_PAGE;
