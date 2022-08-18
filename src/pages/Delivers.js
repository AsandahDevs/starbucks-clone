import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Cards from "../components/Cards";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Delivers = () => {
  return (
    <>
      <Container>
        <main>
          <section style={{ backgroundColor: "whitesmoke" }}>
            <img
              src={"images/starbucks_deliver_image.webp"}
              alt="starbucks delivers "
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h1 style={{ fontSize: "26px", padding: "0rem 1rem" }}>
              Your Starbucks® run just got even easier
            </h1>
            <p style={{ color: "grey", padding: "0rem 1rem" }}>
              Find out if delivery is available near you. Start your order to
              get your Starbucks® favourites delivered to you via UberEats.
            </p>
            <br />
            <Button
              variant="outline-success"
              size="sm"
              style={{
                fontWeight: "bold",
                color: "green",
                marginTop: "-15px",
                marginLeft: "1rem",
                padding: "0rem 0.5rem",
              }}
            >
              Order now
            </Button>
            <br />
            <br />
          </section>
          <section style={{ backgroundColor: "whitesmoke" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                padding: "0rem 1rem",
              }}
            >
              OUR DELIVERY PARTNERS
            </h2>
            <Row className="g-4" style={{ padding: "0rem 1rem" }}>
              <Col md={6}>
                <Cards
                  src={"images/uber_eats_logo.webp"}
                  alt="uber_eats_logo"
                  imgStyle={{ height: "188px" }}
                  loading="lazy"
                  title="
Starbucks® Delivers with Uber Eats"
                  text="Get your favourites delivered straight to your door with Uber Eats!"
                  textStyle={{ color: "grey", fontSize: "15px" }}
                  btnText="order now"
                  btnStyle={{
                    color: "green",
                    fontWeight: "bold",
                    padding: "0rem 0.5rem",
                  }}
                />
              </Col>
              <Col md={6}>
                <Cards
                  src={"images/mr_d_logo.webp"}
                  alt="mr_d_logo"
                  imgStyle={{ height: "185px" }}
                  loading="lazy"
                  title="Starbucks® Delivers with Mr Delivery"
                  text="Get your favourites delivered straight to your door with Mr D!"
                  textStyle={{ color: "grey" }}
                  btnText="order now"
                  btnStyle={{
                    color: "green",
                    fontWeight: "bold",
                    padding: "0rem 0.5rem",
                  }}
                />
              </Col>
            </Row>
            <br />
          </section>
          <section style={{ backgroundColor: "whitesmoke" }}>
            <img
              src={"images/arial_view_of_starbucks_servings.webp"}
              alt="arial_view_of_starbucks_servings"
              loading="lazy"
              style={{ width: "100%", height: "300px", padding: "0rem 1rem" }}
            />
            <br />
            <br />
            <h2 style={{ fontWeight: "normal", padding: "0rem 1rem" }}>
              Starbucks at Home
            </h2>
            <p
              style={{ color: "grey", fontSize: "small", padding: "0rem 1rem" }}
            >
              Enjoying your favourite Starbucks® South Africa experiences from
              the comfort of your home is closer than you might think. It's the
              coffee you know and love, in your favourite cup and paired with
              freshly prepared food made per order, just for you
            </p>
            <Button
              variant="outline-success"
              style={{
                color: "green",
                fontWeight: "bold",
                marginLeft: "1rem",
                padding: "0rem 0.5rem",
              }}
              size="sm"
            >
              Find out more
            </Button>
            <br />
            <br />
            <br />
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                padding: "0rem 1rem",
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p style={{ color: "grey", padding: "0rem 1rem" }}>
              Check out our Starbucks® Delivers
              <Link to="#" style={{ color: "green", marginLeft: "2px" }}>
                FAQs.
              </Link>
            </p>
            <br />
          </section>
          <section>
            <Footer />
          </section>
        </main>
        <aside className="backgroundImageForDeliversPage">
          <p
            className="backgroundTextForHomePage"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "transparent",
            }}
          >
            Lorem text with a bunch of gibberish attached to it.
          </p>
        </aside>
      </Container>
    </>
  );
};

export default Delivers;
