import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";

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

          <section style={{ margin: "2rem 2rem" }}>
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
                backgroundColor: "transparent",
                color: "green",
              }}
            >
              Order Now
            </Button>
          </section>

          <section>
            <Footer />
          </section>
        </main>
        <aside className="backgroundImage1">
          <div
            className="background-text"
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
                margin: "auto",
                marginTop: "2rem",
                marginBottom: "2rem",
                backgroundColor: "transparent",
                color: "white",
                borderColor: "white",
                fontWeight: "bold",
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
