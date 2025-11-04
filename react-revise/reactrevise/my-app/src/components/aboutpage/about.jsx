import React from "react";
import "../aboutpage/about.css";
const AboutPage = () => {
  return (
    <main className="aboutpage-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            Learn more about who we are, what we stand for, and how we’re making
            a difference every day.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and businesses through creative
          and innovative digital solutions. We focus on delivering impactful
          projects that improve lives and inspire growth.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a connected world where technology bridges gaps and opens
          doors to limitless possibilities. Our goal is to lead with innovation
          and compassion, shaping a better digital future.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Sujal Shrestha</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Rynox</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Jane Doe</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
