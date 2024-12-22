import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Gallery from "../pages/Gallery.jsx";
import Navbar from "./Navbar.jsx";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" indexed element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default Layout;
