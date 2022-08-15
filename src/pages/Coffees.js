import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Footer from "../components/Footer";

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
          <section style={{ margin: "2rem 2rem" }}>
            <div className="coffee-grid-layout">
              <figure>
                <img
                  src={"/images/pike_place_coffee.jfif"}
                  alt="pike_place_coffee"
                />
                <figcaption style={{ fontWeight: "bold" }}>
                  Pike Place <br />
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    Medium Roasts
                  </Button>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={"/images/house_blend_coffee.jfif"}
                  alt="house_blend_coffee "
                />
                <figcaption style={{ fontWeight: "bold" }}>
                  House Blend <br />
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    Medium Roasts
                  </Button>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={"/images/cafe_verona_coffee.jfif"}
                  alt="cafe_verona_coffee "
                />
                <figcaption style={{ fontWeight: "bold" }}>
                  Cafe Verona <br />
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    Dark Roasts
                  </Button>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={"/images/expresso_roast.jfif"}
                  alt="expresso_roast_coffee "
                />
                <figcaption style={{ fontWeight: "bold" }}>
                  Expresso Roast <br />
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    Dark Roasts
                  </Button>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={"/images/decaf_expresso-roast.jfif"}
                  alt="decaf_expresso_coffee "
                />
                <figcaption style={{ fontWeight: "bold" }}>
                  Decaf Expresso Roasts <br />
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      fontWeight: "bold",
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    Dark Roasts
                  </Button>
                </figcaption>
              </figure>
            </div>
          </section>
          <section style={{ margin: "2rem 2rem" }}>
            <h2>How to Brew</h2>
            <p>
              You might be surprised at how the different brewing methods we use
              at Starbucks can enhance characteristics in your coffee. Let our
              expertise help you unlock its full potential – for the perfect cup
              every time.
            </p>
            <h3 style={{ fontSize: "15px", marginLeft: "5.4rem" }}>
              Coffee Press
            </h3>
            <div className="brewingInstructions-grid-layout">
              <img
                src={"/images/coffee_press_icon.jfif"}
                alt="coffee presser"
                style={{ width: 50 }}
              />
              <p style={{ color: "grey", fontSize: "15px" }}>
                Brewing with a coffee press retains the precious natural oils
                that paper filters absorb and extracts the coffee’s full flavour
                while giving it a consistency that’s thick and rich. <br />
                <br />
                <div style={{ fontWeight: "bold", color: "black" }}>
                  1. Grind and measure
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Remember, coffee is like produce. Buy it often in small
                  quantities to enjoy it at the peak of freshness. TIP:
                  Remember, coffee is like produce. Buy it often in small
                  quantities to enjoy it at the peak of freshness.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  2.Add hot water
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  To give your coffee the best possible flavour, use filtered or
                  bottled water. TIP: To give your coffee the best possible
                  flavour, use filtered or bottled water.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  3.Place plunger and brew
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Put the plunger back on the press without pushing it down and
                  let the coffee brew for 4 minutes.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  4.Press and pour
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Gently push down the plunger until it reaches the bottom of
                  the press and enjoy.
                </div>
              </p>
            </div>
            <hr />
            <h3 style={{ fontSize: "15px", marginLeft: "5.4rem" }}>
              Pour-Over
            </h3>
            <div className="brewingInstructions-grid-layout">
              <img
                src={"/images/pour_over_coffee_maker.webp"}
                alt="pour over coffee maker"
                style={{ width: 50 }}
              />
              <p style={{ color: "grey", fontSize: "15px" }}>
                Pour-over is a beautifully simple and accessible way to brew a
                single cup of coffee with clean, fully developed flavour and
                body. <br />
                <br />
                <div style={{ fontWeight: "bold", color: "black" }}>
                  1. Measure and boil
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Measure as much water as you’re going to use to brew, plus a
                  little extra for rinsing the filter, and bring it to a boil.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  2.Pre-moisten filter
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Briefly rinse the paper filter with hot water and discard the
                  rinse water. This will give your coffee the purest flavour
                  possible.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  3.Measure and grind
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Next, measure your coffee. For pour-over, use coffee ground
                  for a paper cone. It’s a relatively fine grind that looks like
                  granulated sugar. Measure 2 tablespoons of coffee per 6 ounces
                  of water.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  4.Pour and pause
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Use hot water that’s just off the boil and fill the cone
                  halfway to saturate the grounds. Pause for 10 seconds and let
                  the coffee bloom. This allows the coffee to hydrate evenly and
                  begin to develop flavour.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  5. Complete the pour and enjoy
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  To make your pour-over more consistent, use a timer. It should
                  take about 3 minutes to make a cup. <br />
                  <em>
                    TIP: To make your pour-over more consistent, use a timer. It
                    should take about 3 minutes to make a cup.
                  </em>
                </div>
              </p>
            </div>
            <hr />
            <h3 style={{ fontSize: "15px", marginLeft: "5.4rem" }}>
              Iced Pour-Over
            </h3>
            <div className="brewingInstructions-grid-layout">
              <img
                src={"/images/iced_pour_over.png"}
                alt="iced pour over"
                style={{ width: 50 }}
              />
              <p style={{ color: "grey", fontSize: "15px" }}>
                Iced pour-over is a simple and approachable way to make rich,
                full-flavoured iced coffee one pitcher at a time. <br />
                <br />
                <div style={{ fontWeight: "bold", color: "black" }}>
                  1. Pre-moisten filter
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Briefly rinse the paper filter with hot water and discard the
                  rinse water. This will give your coffee the purest flavour
                  possible.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  2.Choose the right grind
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  For pour-over, use coffee ground for a paper cone. It’s a
                  relatively fine grind that looks like granulated sugar
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  3.Measure
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Iced pour-over is brewed at double strength and diluted with
                  ice, so measure 4 tablespoons of coffee for every 6 ounces of
                  hot water.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  4.Pour and pause
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Use hot water that’s just off the boil and fill the cone
                  halfway to saturate the grounds. Pause for 10 seconds and let
                  the coffee bloom. This lets it hydrate evenly and begin to
                  develop flavour.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  5.Complete the pour
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Slowly add the rest of the water, pouring in small, steady
                  circles to cover all the grounds.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  6.Add ice
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  African coffees are popular for iced pour-over because of
                  their superb juicy body, and tangy, sparkling citrus notes.
                  <br />
                  <em>
                    TIP: African coffees are popular for iced pour-over because
                    of their superb juicy body, and tangy, sparkling citrus
                    notes.
                  </em>
                </div>
              </p>
            </div>
            <hr />
            <h3 style={{ fontSize: "15px", marginLeft: "5.4rem" }}>
              Coffee Brewer
            </h3>
            <div className="brewingInstructions-grid-layout">
              <img
                src={"/images/coffee_brewer.png"}
                alt="coffee brewer"
                style={{ width: 50 }}
              />
              <p style={{ color: "grey", fontSize: "15px" }}>
                Drip coffee is a convenient way to make great coffee. With the
                right grind and pure water, you can brew a fantastic cup of
                coffee in a coffee brewer. <br />
                <br />
                <div style={{ fontWeight: "bold", color: "black" }}>
                  1. Choose the right grind
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  For a flat bottom filter, use a medium grind that resembles
                  sea salt. Cone filters use a finer grind that resembles
                  granulated sugar.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  2.Measure
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  Use 2 tablespoons of freshly ground coffee for every 6 ounces
                  of water.
                </div>
                <br />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "-25px",
                  }}
                >
                  3.Brew and enjoy
                </div>
                <br />
                <div style={{ marginTop: "-20px" }}>
                  <em>
                    TIP: Brewed coffee is always best fresh, so make as much as
                    you’ll enjoy in a sitting. Reheating coffee can dull the
                    flavour.
                  </em>
                </div>
              </p>
            </div>
            <hr />
          </section>
          <section style={{ margin: "2rem 2rem" }}>
            <Footer />
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
