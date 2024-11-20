import React from "react";
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className="hero-main">
            <p data-aos="zoom-in-up">Hello, I&apos;m</p>
            <p data-aos="zoom-in-up">Siddiqa</p>
            <p data-aos="zoom-in-up">Badar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
