import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.src}
        alt={props.alt}
        style={props.imgStyle}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={props.textStyle}>{props.text}</Card.Text>
        <Button variant="outline-success" style={props.btnStyle}>
          {props.btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
