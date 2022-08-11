import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const SHARED_LAYOUT = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default SHARED_LAYOUT;
