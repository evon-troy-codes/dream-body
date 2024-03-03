import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Your Dream Body Awaits</h1>
        <p>
          Discover the first step towards the confidence you deserve with Dream
          Body Finder. We connect you with top-tier plastic surgeons, handpicked
          for their expertise and commitment to excellence. Begin your journey
          to transformation with professionals you can trust, tailored to bring
          your vision to life.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
