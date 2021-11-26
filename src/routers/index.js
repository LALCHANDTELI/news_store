import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import Navbar from "../components/header/Navbar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
};

export default Routing;
