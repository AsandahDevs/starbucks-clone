import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import CreateAcccount from "../components/CreateAccount";
import AddMoneyAndOrder from "../components/AddMoneyAndOrder";
import RewardsCollection from "../components/RewardCollection";

const Rewards = () => {
  const [account_figure, setAccount_figure] = useState(false);
  const updateFigureInfo = () => {
    setAccount_figure((prevData) => !prevData);
  };
  const [money_and_order_figure, setMoney_and_order_figure] = useState(false);
  const updateFigureInfo2 = () => {
    setMoney_and_order_figure((prevData) => !prevData);
  };
  const [rewards_figure, setRewards_figure] = useState(false);
  const updateFigureInfo3 = () => {
    setRewards_figure((prevData) => !prevData);
  };
  return (
    <>
      <Container fluid>
        <main>
          <section
            style={{
              backgroundColor: "whitesmoke",
              padding: "0rem 1rem",
            }}
          >
            <h1>Sip your way to more rewards with Starbucks® Rewards</h1>
            <p style={{ color: "grey" }}>
              Choose how to use your Stars for rewards big and small!
            </p>
            <br />
            <br />
            <h2>Stars will add up fast!</h2>
            <p>See your Stars add up and get more drinks</p>
            <figure className="rewards-grid-layout">
              <img
                src={"images/starbucks_collect_stars_rewards.webp"}
                alt="A cup with incoming stars"
                loading="lazy"
                style={{ width: "70px", borderRadius: "50%" }}
              />
              <figcaption>
                <h2 style={{ fontSize: "20px" }}>Collect Stars</h2>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  So, what's new? Now, you'll collect Stars based on how much
                  you spend. For every R2, collect 1 Star. So many ⭐ you might
                  need 🕶
                </p>
              </figcaption>
            </figure>
            <hr style={{ border: "1.5px solid gray" }} />
            <figure className="rewards-grid-layout">
              <img
                src={"images/starbucks_drink.webp"}
                alt="A starbucks drink"
                loading="lazy"
                style={{ width: "70px", borderRadius: "50%" }}
              />
              <figcaption>
                <h2 style={{ fontSize: "20px" }}>Every 250 Stars</h2>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  Have a drink on us - that's us adding a little bit of joy to
                  your day.
                </p>
              </figcaption>
            </figure>
            <hr style={{ border: "1.5px solid gray" }} />
            <figure className="rewards-grid-layout">
              <img
                src={"images/starbucks_refill.webp"}
                alt="A cup refill"
                loading="lazy"
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              />
              <figcaption>
                <h2 style={{ fontSize: "20px" }}>At 750 Stars</h2>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  You've reached Gold Level! Gold members enjoy three refills of
                  filter coffee and tea - all on the house. Thank us later.
                </p>
              </figcaption>
            </figure>
            <hr style={{ border: "1.5px solid gray" }} />
            <figure className="rewards-grid-layout">
              <img
                src={"images/starbucks_free_birthday_drink.webp"}
                alt="A starbucks milkshake drink"
                loading="lazy"
                style={{ width: "70px", borderRadius: "50%" }}
              />
              <figcaption>
                <h2 style={{ fontSize: "20px" }}>
                  Free Birthday Drink & Exclusive Events
                </h2>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  Enjoy a Birthday drink on us when you reach Gold Level too,
                  you deserve it! Plus, you'll receive Gold Members Only invites
                  to exclusive events, this includes early access to new
                  beverages being released.
                </p>
              </figcaption>
            </figure>
            <hr style={{ border: "1.5px solid gray" }} />
            <br />
            <br />
            <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
              DOWNLOAD THE STARBUCKS REWARDS APP
            </h2>
            <figure className="rewards-grid-layout2">
              <img
                src={"images/starbucks_tap_for_rewards.webp"}
                alt="starbucks_tap_for_rewards"
                loading="lazy"
                style={{ width: "300px" }}
              />
              <figcaption>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Tap Tap Coffee{" "}
                </h3>
                <p style={{ color: "grey" }}>
                  You have a phone, we have an app.
                </p>
                <p style={{ color: "grey" }}>
                  Use the Starbucks Rewards App to locate your local Starbucks &
                  pay for your everyday faves.
                </p>
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    marginTop: "10px",
                    padding: "2.5px 0.5rem",
                  }}
                >
                  Download the app
                </Button>
              </figcaption>
            </figure>
            <br />
          </section>
          <section style={{ padding: "0rem 1rem" }}>
            <h2
              style={{
                fontSize: "30px",
                marginTop: "25px",
                backgroundColor: "white",
              }}
            >
              Getting started is easy
            </h2>
            <h3
              style={{
                fontSize: "15px",
                marginTop: "25px",
                fontWeight: "bold",
              }}
            >
              The app so, so easy
            </h3>
            <p style={{ marginTop: "-5px" }}>
              Locate a store, manage your account, track your Rewards and other
              useful stuff – all in the app. Download the app today to get
              started.
            </p>
            <div style={{ display: "flex" }}>
              <figure style={{ marginRight: "12px" }}>
                <img
                  src={"images/create_an_account_sketch.svg"}
                  alt="create_an_account"
                  loading="lazy"
                  style={{ width: "90px", cursor: "pointer" }}
                  onClick={updateFigureInfo}
                />
                <figcaption
                  style={{
                    fontWeight: "normal",
                    fontSize: "large",
                    fontStyle: "italic",
                  }}
                >
                  Create an account
                </figcaption>
              </figure>
              <figure style={{ marginRight: "15px" }}>
                <img
                  src={"images/add_money_into_account_sketch.svg"}
                  alt="add_money_into_account"
                  loading="lazy"
                  style={{ width: "90px", cursor: "pointer" }}
                  onClick={updateFigureInfo2}
                />
                <figcaption
                  style={{
                    fontWeight: "normal",
                    fontSize: "large",
                    fontStyle: "italic",
                  }}
                >
                  Add money and order
                </figcaption>
              </figure>
              <figure>
                <img
                  src={"images/starbucks_collect_stars_rewards.webp"}
                  alt="collect stars, get rewards"
                  loading="lazy"
                  style={{ width: "90px", cursor: "pointer" }}
                  onClick={updateFigureInfo3}
                />
                <figcaption
                  style={{
                    fontWeight: "normal",
                    fontSize: "large",
                    fontStyle: "italic",
                  }}
                >
                  Collect stars,get rewards
                </figcaption>
              </figure>
            </div>
          </section>
          <br />
          <section style={{ padding: "1rem 1rem", backgroundColor: "white" }}>
            {account_figure ? (
              <CreateAcccount
                img={"images/create_an_account_sketch.svg"}
                alt="Create an account svg"
              />
            ) : (
              ""
            )}
            {money_and_order_figure ? (
              <AddMoneyAndOrder
                img={"images/add_money_into_account_sketch.svg"}
                alt="Add money into account svg"
              />
            ) : (
              ""
            )}
            {rewards_figure ? (
              <RewardsCollection
                img={"images/starbucks_collect_stars_rewards.webp"}
                alt="collect stars reward"
                style={{ height: "250px", width: "250px" }}
              />
            ) : (
              ""
            )}
          </section>
          <br />
          <section
            style={{ padding: "1rem 1rem", backgroundColor: "whitesmoke" }}
          >
            <h2>Questions?</h2>
            <p style={{ color: "grey", fontSize: "18px" }}>
              We want to help in any way we can. You can ask your barista
              anytime or send through your queries to any of the below
              platforms...
            </p>
            <Button
              variant="outline-success"
              size="sm"
              style={{
                fontWeight: "bold",
                color: "green",
                marginTop: "10px",
                padding: "2.5px 0.5rem",
              }}
            >
              Find out more
            </Button>
            <br />
            <br />
          </section>
          <section>
            <Footer />
          </section>
        </main>
        <aside className="backgroundImageForRewardsPage">
          {" "}
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

export default Rewards;
