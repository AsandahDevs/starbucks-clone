import Button from "react-bootstrap/esm/Button";
const AddMoneyAndOrder = (props) => {
  return (
    <>
      <figure className="d-md-flex flex-row ">
        <img src={props.img} alt={props.alt} style={props.style} />
        <figcaption>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Add money and order
          </h2>
          <p style={{ color: "grey", fontSize: "15px" }}>
            Keep a little in your account, so you're always ready for coffee.
          </p>
          <br />
          <Button variant="success" size="sm" style={{ marginTop: "0.5rem" }}>
            Download the app
          </Button>
        </figcaption>
      </figure>
    </>
  );
};

export default AddMoneyAndOrder;
