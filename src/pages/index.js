import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import HeroSection from "../HeroSection";
import InfoSection from "../components/InfoSection";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { homeObjOne } from "../components/InfoSection/Data";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
