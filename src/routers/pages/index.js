import { Route, Routes } from "react-router-dom";
import About from "../../components/pages/About";
import Contact from "../../components/pages/Contact";
import Home from "../../components/pages/Home";
import News_Container from "../../components/pages/News_Container";

const Navs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/news/:title" element={<News_Container />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Navs;
