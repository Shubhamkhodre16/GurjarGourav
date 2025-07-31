import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import EntriesForEvent from "./Pages/EntriesForEvent";
import ScolarShipform from "./Pages/ScolarShipForm";
import PatrakaarSamaroh from "./Pages/PatrakaarSamaroh";
import SammanSamaroh from "./Pages/SammanSamaroh";
import Contact from "./Pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Box } from "@mui/material";

function App() {
  return (
    <>
      {/* <Box display="flex" flexDirection="column" height="100%"> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="हमारे बारे में" element={<About />} />
            <Route path="ईवेंट के लिए प्रविष्टियाँ" element={<EntriesForEvent />} />
            <Route path="छात्रवृत्ति फ़ॉर्म" element={<ScolarShipform />} />
            <Route path="पत्रकार समारोह" element={<PatrakaarSamaroh />} />
            <Route path="सम्मान समारोह" element={<SammanSamaroh />} />
            <Route path="संपर्क करें" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      {/* </Box> */}
    </>
  );
}

export default App;
