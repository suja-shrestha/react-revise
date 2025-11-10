import React from "react";
import ReactDOM from "react-dom/client";

// Function to simulate a coin toss
function coinToss() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// Standalone variables
const kitty = '🐱';
const doggy = '🐶';

// Wrapped in object for bracket access
const pics = { kitty, doggy };

function App() {
  // Using standalone variables
  const img1 = coinToss() === 'heads' ? kitty : doggy;

  // Using object with bracket notation
  const img2 = pics[coinToss() === 'heads' ? 'kitty' : 'doggy'];

  return (
    <div style={{ fontSize: "50px", textAlign: "center", marginTop: "50px" }}>
      <h2>Standalone Variable:</h2>
      <p>{img1}</p>

      <h2>Object with Bracket Notation:</h2>
      <p>{img2}</p>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
