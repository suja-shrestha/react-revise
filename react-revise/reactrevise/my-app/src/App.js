// App.js (Corrected)
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/homepage";
import AboutPage from "./components/aboutpage/about";

function App() {
  return (
    <> {/* Use a React Fragment or a div to wrap your content */}

      <Navbar />
      <HomePage/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="#" element={<ContactPage />} /> */}
        <Route path="/useEffectExample" element={<useEffectExample />} />
      </Routes>
    </>
  );
}

export default App;