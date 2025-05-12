import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => (
  <div className="hero-section">
    <div className="hero-gradient-bg"></div>
    <div className="hero-content">
      <h1>
        Welcome to{" "}
        <span className="pulse-text" style={{ fontWeight: "bold" }}>
          Godspeed
        </span>
      </h1>
      <div className="typewriter-line"style={{
        fontWeight: 'bold',
        fontSize: '1.4rem',
        margin: '1rem 0',
        color: '#fff',
        minHeight: '2.2em'
      }}>
        <Typewriter
          options={{
            strings: ["Build, Scale & Grow as an 11x founder"],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
            deleteSpeed: 30,
          }}
        />
      </div>
      <p>
        Accelerate your workflow with the next-generation platform for modern teams.
      </p>
      <button>Get Started</button>
    </div>
  </div>
);

export default Hero;

