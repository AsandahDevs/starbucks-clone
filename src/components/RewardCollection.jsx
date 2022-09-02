import Button from "react-bootstrap/esm/Button";
const RewardsCollection = (props) => {
  return (
    <>
      <figure className="d-md-flex flex-row ">
        <img src={props.img} alt={props.alt} style={props.style} />
        <figcaption>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
            Collect Stars, get Rewards
          </h2>
          <p style={{ color: "grey", fontSize: "15px" }}>
            You get 1 Star for every R2 you spend. Watch them add up fast!
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

export default RewardsCollection;
