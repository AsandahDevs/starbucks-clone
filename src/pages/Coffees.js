import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Coffees = () => {
  return (
    <>
      <Container>
        <main>
          <section style={{ margin: "0.5rem 2rem" }}>
            <h1>Our Coffees</h1>
            <p style={{ color: "grey" }}>
              At Starbucks it always has been and will always be about quality.
              Our passion for coffee is rivalled only by our love of sharing it.
            </p>
            <p style={{ color: "grey" }}>
              {" "}
              Whether you're sipping solo or hosting guests, enjoying coffee at
              home should be a relaxing, soothing and soulful experience.
            </p>
            <p style={{ color: "grey" }}>
              {" "}
              With so many options to choose from, it's difficult to find that
              perfect cup.
            </p>
          </section>
          <br />
          <section style={{ margin: "0.5rem 2rem" }}>
            <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
              THE STARBUCKS ROAST
              <sup>
                <small style={{ fontSize: "6px" }}>TM</small>
              </sup>{" "}
              SPECTRUM
            </h2>
            <p style={{ color: "grey" }}>
              Our coffees are classified by three roast profiles, so you can
              easily find the flavour and intensity that's perfect for you.
            </p>
            <br />
            <br />
            <p style={{ fontStyle: "italic", color: "grey" }}>
              Lighter-bodied and mellow, Starbucks® Blonde Roast coffees awaken
              the senses gently and deliver an approachable and flavourful cup
              with slight hints of roast.
            </p>
            <Link to="#" style={{ fontWeight: "bold", color: "green" }}>
              BLONDE ROASTS
            </Link>
            <br />
            <br />
            <p style={{ fontStyle: "italic", color: "grey" }}>
              Smooth and balanced, our medium-roasted coffees are perfect for
              every coffee break.
            </p>
            <Link to="#" style={{ fontWeight: "bold", color: "green" }}>
              MEDIUM ROASTS
            </Link>
            <br />
            <br />
            <p style={{ fontStyle: "italic", color: "grey" }}>
              Fuller-bodied and bold, these coffees feature robust flavours and
              the characteristic essence of an intense roast.
            </p>
            <Link to="#" style={{ fontWeight: "bold", color: "green" }}>
              DARK ROASTS
            </Link>
          </section>
          <section style={{ margin: "2rem 2rem" }}>
            <h2 style={{ fontSize: "25px" }}>Starbucks at Home</h2>
            <p style={{ color: "grey" }}>
              Bring your favourites home so that you can always enjoy the
              perfect cup…
            </p>
            <Button
              variant="outline-success"
              size="sm"
              style={{
                fontWeight: "bold",
                color: "green",
              }}
            >
              Order with Starbucks Delivers
            </Button>
          </section>
        </main>
        <aside className="backgroundImageForCoffeePage">
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

export default Coffees;
