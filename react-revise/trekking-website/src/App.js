import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treks from "./components/Treks";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Treks />
      <About />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
