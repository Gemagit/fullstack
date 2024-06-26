import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home/Home'
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";


const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
