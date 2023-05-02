import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useSpring, useMotionValue } from "framer-motion";


import './assets/css/custom.css'; 
import './assets/css/responsive.css'; 
import './App.css';

import ScrollToTop from './components/ScrollToTop'; 
import Header from './components/header';
import Footer from './components/Footer';



function App() {


  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>    
     <BrowserRouter>
     <ScrollToTop />                       
        <Header />
        
        <Footer />             
      </BrowserRouter>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  );
}

export default App;
