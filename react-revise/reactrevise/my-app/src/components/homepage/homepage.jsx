import React from "react";
import "../homepage/homepage.css";
const HomePage = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>
            Discover amazing experiences, learn more about us, and get in touch
            for collaborations. We make your ideas come to life.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are a creative team passionate about building beautiful and
          functional web applications. Our mission is to deliver exceptional
          digital experiences that connect people and ideas.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Web Development</h3>
            <p>
              Modern, responsive, and fast websites built using React, Laravel,
              and modern technologies.
            </p>
          </div>
          <div className="feature-card">
            <h3>UI/UX Design</h3>
            <p>
              We craft intuitive and visually appealing designs that enhance
              user experiences.
            </p>
          </div>
          <div className="feature-card">
            <h3>SEO Optimization</h3>
            <p>
              Improve your visibility and ranking with our smart SEO strategies
              and analytics tools.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or want to work with us? Let’s start a conversation!
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </main>
  );
};

export default HomePage;
