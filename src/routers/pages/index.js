import {Route, Routes } from "react-router-dom";
import Home from "../../components/pages/Home";
import News_Container from "../../components/pages/News_Container";

const Navs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/news/:title" element={<News_Container />} />
    </Routes>
  );
};

export default Navs;
