import React from "react";

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About Us</h2>
            <p>
                We are passionate adventurers helping travelers explore the natural beauty of Nepal.
                From the Himalayas to the valleys, our mission is to create safe, exciting, and memorable trekking experiences.
            </p>
           <section className="review">
      <div className="review-container">
        <h2>Trusted by over 10,000 adventurers worldwide.</h2>
        
        <div className="faq-container">
          <details className="faq-item">
            <summary>Why choose us?</summary>
            <p>
              We provide expert guides, comprehensive safety measures, and unforgettable experiences. 
              Our team has over 15 years of experience in organizing treks across Nepal's most 
              beautiful trails.
            </p>
          </details>

          <details className="faq-item">
            <summary>What's included in the package?</summary>
            <p>
              All our packages include professional guides, accommodation, meals, permits, 
              transportation, and safety equipment. We ensure you have everything needed 
              for a comfortable and safe journey.
            </p>
          </details>

          <details className="faq-item">
            <summary>Do I need prior trekking experience?</summary>
            <p>
              No prior experience is necessary! We offer treks for all skill levels, from 
              beginners to experienced trekkers. Our guides will support you every step of the way.
            </p>
          </details>

          <details className="faq-item">
            <summary>What is the best time to trek?</summary>
            <p>
              The best seasons are Spring (March-May) and Autumn (September-November). 
              These months offer clear skies, moderate temperatures, and stunning mountain views.
            </p>
          </details>
        </div>
      </div>
    </section>
        </section>
    );
};

export default About;
