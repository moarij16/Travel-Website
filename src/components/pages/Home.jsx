import HeroSection from "../HeroSection";
import "../../App.css";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
