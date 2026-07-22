import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Captions from "./components/Captions";
import Favorites from "./components/Favorites";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Captions" element={<Captions />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/About" element={<About />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/Profile" element={<Profile />} />
         <Route path="/Songs/:artist" element={<Songs />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;