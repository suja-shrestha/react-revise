import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video autoPlay loop muted playsInline className="hero-video">
        <source
src="https://videos.pexels.com/video-files/1168716/1168716-hd_1920_1080_30fps.mp4"

          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Discover the Best Treks in Nepal</h1>
        <p>
          Explore breathtaking trails, stunning peaks, and unforgettable adventures.
        </p>
        <button className="hero-btn">Explore Packages</button>
      </div>
    </section>
  );
};

export default Hero;