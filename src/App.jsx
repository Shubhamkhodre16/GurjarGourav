import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import EntriesForEvent from './Pages/EntriesForEvent';
import ScolarShipform from "./Pages/ScolarShipForm"
import PatrakaarSamaroh from './Pages/PatrakaarSamaroh';
import SammanSamaroh from "./Pages/SammanSamaroh"
import Contact from "./Pages/Contact"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/material"

function App() {
  

  return (
    <>
     <Box display="flex" flexDirection="column" height="100vh">

    <Router >
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="entries" element={<EntriesForEvent />} />
        <Route path="scholarship" element={<ScolarShipform />} />
        <Route path="patrakaar" element={<PatrakaarSamaroh/>} />
        <Route path="samman" element={<SammanSamaroh/>} />
        <Route path="contact" element={<Contact/>} />
        



       </Routes>
       <Footer />
    </Router>
     </Box>
    </>
  )
}

export default App
