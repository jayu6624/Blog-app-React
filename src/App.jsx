import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Signup from "./component/Signup";
import Login from "./component/login"; // Note: Ensure the correct casing here.
import About from "../src/about/About";
import Contect1 from "../src/contact/Contect1";
import { Toaster } from "react-hot-toast"; // Correctly import Toaster

import Newblog from "./blog/Newblog";

// import {useDispatch} from 'react-redux'

function App() {
  // const [loading ,setloading] = useState(true);
  // const dispatch = useDispatch()
  return (
    <div>
      
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect1 />} />
          <Route path = "/blog" element={<Newblog/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
