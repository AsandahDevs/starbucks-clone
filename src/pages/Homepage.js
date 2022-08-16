import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Cards from "../components/Cards";

const Homepage = () => {
  return (
    <>
      <Container>
        <main>
          <section>
            <img
              src={"images/dark_cocoa_with_orange_latte.jfif"}
              alt="dark_cocoa_with_orange_latte"
              style={{ width: "100%" }}
            />
          </section>
          <section
            style={{ backgroundColor: "whitesmoke", padding: "0rem 1rem" }}
          >
            <h1 style={{ fontSize: "30px" }}>
              Uplift the Everyday with Starbucks
            </h1>
            <p style={{ fontSize: "15px", color: "grey" }}>
              Introducing the latest way to uplift the everyday! The new Dark
              Cocoa & Orange Latte is a silky beverage that combines our smooth
              and subtly sweet Starbucks Blonde Espresso roast with the rich
              flavours of real cocoa and juicy notes of fragrant orange. It’s
              best served with our rich and creamy Oat Milk so, how will you
              make it yours? Enjoy this beverage in-store from 14 July or get it
              delivered straight to your door via Starbucks Delivers powered by
              UberEats & MrD.
            </p>
            <Button
              variant="outline-success"
              size="sm"
              style={{
                fontWeight: "bold",
                color: "green",
                padding: "0rem 0.5rem",
              }}
            >
              Order Now
            </Button>
            <br />
            <br />
          </section>
          <section
            style={{ backgroundColor: "whitesmoke", padding: "0rem 1rem" }}
          >
            <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
              YOUR DAILY ROUTINE, THE STARBUCKS WAY
            </h2>
            <figure className="grid-layout">
              <img
                src={"images/arial_view_of_starbucks_servings.jfif"}
                alt="an arial_view_of_starbucks_servings"
                style={{ height: "250px" }}
              />
              <figcaption>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  To Go With Your Coffee
                </h3>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  We're fast becoming known for fabulous food & beverage pairing
                  options, developed by expert chefs, with both savoury and
                  sweet menu items.
                </p>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  Pairings include breakfast or lunchtime options of a French
                  Toast Brioche with Chicken Schnitzel, finished with mayonnaise
                  and a hint of mustard, paired with a Cold Brew.
                </p>
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    padding: "0rem 0.5rem",
                  }}
                >
                  Order Now
                </Button>
              </figcaption>
            </figure>
          </section>
          <section
            style={{ backgroundColor: "whitesmoke", padding: "0rem 1rem" }}
          >
            <Row className="g-4">
              <Col md={6}>
                <Cards
                  src={
                    "/images/the_original_starbucks_store_in_pike_place_market_in_seattle.jpg"
                  }
                  alt={
                    "The original starbucks store in pike place market in seattle"
                  }
                  imgStyle={{ height: "150px" }}
                  title={"About us"}
                  text={"Find out more about our company and heritage."}
                  textStyle={{ color: "grey" }}
                  btnText={"Find out more"}
                  btnStyle={{
                    fontWeight: "bold",
                    color: "green",
                    padding: "0rem 0.5rem",
                  }}
                />
              </Col>
              <Col md={6}>
                <Cards
                  src={"/images/TEDDY_STARBUCKS-STORIES.png"}
                  alt={"Two man sharing a celebration"}
                  imgStyle={{ height: "150px" }}
                  title={"Starbucks stories"}
                  text={"Keep up to date with our latest stories and news."}
                  textStyle={{ color: "grey" }}
                  btnText={"Find out more"}
                  btnStyle={{
                    fontWeight: "bold",
                    color: "green",
                    padding: "0rem 0.5rem",
                  }}
                />
              </Col>
            </Row>
            <br />
          </section>
          <section>
            <Footer />
          </section>
        </main>
        <aside className="backgroundImageForHomePage">
          <div
            className="backgroundTextForHomePage"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            eBucks |{" "}
            <img
              src={"images/starbucks_logo.png"}
              alt="starbucks_logo"
              style={{ height: "55px", borderRadius: "50%" }}
            />
          </div>
          <p
            style={{
              display: "inline-block",
              marginTop: "2rem",
              marginLeft: "16rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Pay with your FNB Virtual Card every week and get rewarded.
          </p>
          <p
            style={{
              display: "inline-block",
              marginTop: "1rem",
              marginLeft: "16rem",
              color: "grey",
            }}
          >
            Visit the eBucks tab on the FNB app for more information
          </p>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              variant="outline-secondary"
              size="sm"
              style={{
                display: "block",
                marginLeft: "18rem",
                marginTop: "2rem",
                marginBottom: "3rem",
                backgroundColor: "transparent",
                color: "white",
                borderColor: "white",
                fontWeight: "bold",
                padding: "0.3rem 1rem",
              }}
            >
              Find out more
            </Button>
          </Link>
        </aside>
      </Container>
    </>
  );
};

export default Homepage;
