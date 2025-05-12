import React from "react";
import Hero from './components/Hero';
import Product from './components/Product';
import Team from './components/Team';
import About from './components/About';
import Pricing from './components/Pricing';
import ScrollSpringDemo from "./components/scroll";
import "./components/scroll.css";

function App() {
  return (
    <>
      
      <ScrollSpringDemo />
      <Hero />
      <Product />
      <Team />
      <About />
      <Pricing />
    </>
  );
}

export default App;
