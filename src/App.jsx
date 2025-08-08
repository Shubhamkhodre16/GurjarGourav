

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Histories from "./Pages/Histories";
import AchievementsAwards from "./Pages/AchievementsAwards";
import Allmembers from "./Pages/Allmembers";
import Contact from "./Pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useLocation } from "react-router-dom";
// import { Box } from "@mui/material";

function App() {
   useEffect(() => {
    const scrollUp = document.getElementById("scrollUp");

    const handleScroll = () => {
      if (!scrollUp) return;
      if (window.scrollY > 300) {
        scrollUp.style.display = "block";
      } else {
        scrollUp.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    
        <Router>
           <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutUs" element={<About />} />
            <Route path="Events" element={<Events />} />
            <Route path="Histories" element={<Histories />} />
            <Route path="Achievements_And_Awards" element={<AchievementsAwards />} />
            <Route path="All_Members" element={<Allmembers />} />
            <Route path="ContactUs" element={<Contact />} />
          </Routes>
        <a id="scrollUp" href="#" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </a>
          <Footer />
        </Router>

      
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default App;
