import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Signup from "./component/Signup";
import Login from "./component/login.jsx"; // Note: Ensure the correct casing here.
import About from "../src/about/About";
import Contact1 from "../src/contact/Contect1.jsx"; // Correct the casing for Contact
import { Toaster } from "react-hot-toast"; // Correctly import Toaster
import Allblogs from "./component/Allblogs";
import Createblog from "./Createblog/Createblog";
import Newblog from "./blog/Newblog";
import BlogDetail from "./component/BlogDetail.jsx";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/blog" element={<Newblog />} />
          <Route path="/blog/create" element={<Createblog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      
    </div>
  );
}

export default App;
