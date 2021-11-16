import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Homepage from "./component/Homepage/Homepage";
import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Navbar/Sidebar";
import LandingPage from "./component/LandingPage/LandingPage";
import Contact from "./component/Routes/Contact/Contact";
import AboutUs from "./component/Routes/AboutUs/AboutUs";
import Portfolio from "./component/Routes/Portfolio/Portfolio";
import Services from "./component/Routes/Services/Services";


function App() {
 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  Aos.init();

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar toggle={toggle}  />

      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/about" element={ <AboutUs />} />
        <Route path="/contact" element={ <Contact />} />
        
        
       
      </Routes>

     

      
     

      </Router>


    
  );
}

export default App;
