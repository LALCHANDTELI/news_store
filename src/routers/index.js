import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
