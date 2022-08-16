import Container from "react-bootstrap/esm/Container";
const Delivers = () => {
  return (
    <>
      <Container>
        <main>
          <h1>Main content</h1>
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
