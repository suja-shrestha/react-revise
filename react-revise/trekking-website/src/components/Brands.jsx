import React from "react";

const Brands = () => {
  const brands = [
    { name: "TripAdvisor", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/TripAdvisor_logoset_LogoLockup_transparent.svg/320px-TripAdvisor_logoset_LogoLockup_transparent.svg.png" },
    { name: "Lonely Planet", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lonely_Planet_logo.svg/320px-Lonely_Planet_logo.svg.png" },
    { name: "National Geographic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/National_Geographic_Logo.svg/320px-National_Geographic_Logo.svg.png" },
    { name: "BBC Travel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/320px-BBC_Logo_2021.svg.png" },
    { name: "CNN Travel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/320px-CNN.svg.png" },
    { name: "Forbes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Forbes_logo.svg/320px-Forbes_logo.svg.png" }
  ];

  return (
    <section className="brands">
      <div className="brands-container">
        <h3>As Featured In</h3>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;