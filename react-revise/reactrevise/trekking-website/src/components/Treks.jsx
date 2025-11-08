import React from "react";

const treks = [
  {
    name: "Everest Base Camp",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    days: "14 Days",
    price: "$1200",
  },
  {
    name: "Annapurna Circuit",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    days: "12 Days",
    price: "$1000",
  },
  {
    name: "Annapurna Circuit",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    days: "12 Days",
    price: "$1000",
  },
    {
    name: "Annapurna Circuit",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    days: "12 Days",
    price: "$1000",
  },
    {
    name: "Annapurna Circuit",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    days: "12 Days",
    price: "$1000",
  },
    {
    name: "Annapurna Circuit",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    days: "12 Days",
    price: "$1000",
  },
];

const Treks = () => {
  return (
    <section className="treks" id="treks">
      <h2>Popular Treks</h2>
      <div className="trek-container">
        {treks.map((trek, index) => (
          <div className="trek-card" key={index}>
            <img src={trek.image} alt={trek.name} />
            <h3>{trek.name}</h3>
            <p>{trek.days}</p>
            <span>{trek.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treks;
