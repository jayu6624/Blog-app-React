import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Signup from "./component/Signup";
import Login from "./component/login"; // Note: Ensure the correct casing here.
import About from "../src/about/About";
import Contect1 from "../src/contact/Contect1";
import { Toaster } from "react-hot-toast"; // Correctly import Toaster

function App() {
  return (
    <div>
      
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect1 />} />
        </Routes>
      
    </div>
  );
}

export default App;
