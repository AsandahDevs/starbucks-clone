import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const ERROR_PAGE = () => {
  return (
    <div style={{ marginLeft: "30rem", marginTop: "10rem" }}>
      <h1>
        <strong>404</strong>
      </h1>
      <p>Page not found !</p>
      <Link to="/">
        <Button variant="outline-success" style={{ padding: "0rem 1rem" }}>
          Back to homepage
        </Button>
      </Link>
    </div>
  );
};

export default ERROR_PAGE;
