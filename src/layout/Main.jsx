import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
