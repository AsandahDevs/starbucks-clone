import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const SHARED_LAYOUT = () => {
  return (
    <>
      <Navigation fixed="top" />
      <Outlet />
    </>
  );
};

export default SHARED_LAYOUT;
