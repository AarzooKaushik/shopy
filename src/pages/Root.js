import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import Footer from "../components/Footer/Footer";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
