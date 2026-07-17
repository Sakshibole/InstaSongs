import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Captions from "./components/Captions";
import Favorites from "./components/Favorites";
import About from "./components/About";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Captions" element={<Captions />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/About" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;