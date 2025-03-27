// import React, { useEffect, useState } from "react";
// import axios from "axios";

import Header from './components/Header';
import Footer from './components/Footer';
// import { Router, Route, Routes } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Hero from './components/HeroSection';
import About from "./components/About";

import PostJobForm from "./components/PostJob";

import FeaturedJobs from './components/FeaturedJobs';
import RecentlyPostedJobs from './components/RecentlyPostedJobs';

import { useRef } from "react";


function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000")
  //     .then(response => setMessage(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  const postJobRef = useRef(null);

  const scrollToForm = () => {
    if (postJobRef.current) {
      postJobRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>

      <Router>
      <Header scrollToForm={scrollToForm} />
      
      <Routes>
      <Route path="/" element={
          <>
            <Hero />

            <FeaturedJobs />  
            <RecentlyPostedJobs/>
            <div ref={postJobRef} className="bg-gray-200 p-0">
             <PostJobForm />
             </div>

          </>
        } />
  
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
      <Footer />
    </Router>

    </div>
  );
}

export default App;
