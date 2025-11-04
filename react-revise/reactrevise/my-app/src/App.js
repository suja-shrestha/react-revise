// App.js (Corrected)
import React from "react";
// Remove BrowserRouter as Router from here, you only need Routes and Route
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/homepage";
import AboutPage from "./components/aboutpage/about";

function App() {
  return (
    <> {/* Use a React Fragment or a div to wrap your content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="#" element={<ContactPage />} /> */}
      </Routes>
    </>
  );
}

export default App;