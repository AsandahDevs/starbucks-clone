import Button from "react-bootstrap/esm/Button";
const CreateAcccount = (props) => {
  return (
    <>
      <figure className="d-md-flex flex-row ">
        <img src={props.img} alt={props.alt} style={props.style} />
        <figcaption>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Create an account
          </h2>
          <p style={{ color: "grey", fontSize: "15px" }}>
            Signing up is easy and fast. Download our very easy, super useful
            Starbucks Rewards App from your app store and join by setting up an
            account.
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

export default CreateAcccount;
