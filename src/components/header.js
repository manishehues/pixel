import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Expertise from '../pages/expertise';
import Estimate from './estimate';
import $ from "jquery";


function Header() {

    const [showComponent, setShowComponent] = useState(true);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
      
    

    const [isActive, setIsActive] = useState(false); 
    const closeMenu = () => {
        setIsActive(false)        
    }
    const handleClick = event => {
  
        setIsActive(current => !current);
    };   

   
    
  return (    <> 
    
        <header className="siteHeader container-fluid g-0 ">
        <motion.div style={{ scaleX }}  className="progress-bar" />         
            <div className="container-fluid g-0 topPart">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-3 d-flex align-items-center leftSide">
                            <div className="menuBar d-inline">
                                <div className={`bars ${isActive ? 'activeBar' : ''}`} onClick={handleClick}>
                                    <span className="one bar"></span>
                                    <span className="two bar"></span>
                                    <span className="three bar"></span>
                                </div>
                            </div>
                            <div className="siteLogo d-inline">
                                <Link to="/" onClick={closeMenu}>
                                    <img src='assets/images/logo.svg'  />                                    
                                </Link>
                            </div>
                        </div>
                        <div className="col-9 rightSide d-flex justify-content-end align-items-center">
                            <div className="menu d-inline">                            
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item"><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
                                    <li className="nav-item"><NavLink to="/expertise" className="nav-link" onClick={closeMenu}>Expertise</NavLink></li>
                                    <li className="nav-item"><NavLink to="/career" className="nav-link" onClick={closeMenu}>Career</NavLink></li>                                 
                                </ul>
                            </div>
                            <div className="btnArea d-inline">
                                <NavLink to="/contact-us" className="btn btn-primary">Let's Talk</NavLink>
                            </div>
                        </div>
                    </div>
                </div>                
            </div> 
            <div className={`container-fluid g-0 bottomPart ${isActive ? 'openMenu' : ''}`}>
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col-4 serSides">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item d-none"><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
                                <li className="nav-item d-none"><NavLink to="/expertise" className="nav-link" onClick={closeMenu}>Expertise</NavLink></li>
                                <li className="nav-item d-none"><NavLink to="/career" className="nav-link" onClick={closeMenu}>Career</NavLink></li>
                                <li className="nav-item serviceMenu"><NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink></li>
                                <li className="nav-item mb-0"><NavLink to="/case-studies" className="nav-link" onClick={closeMenu}>Case Studies</NavLink></li>                                                               
                            </ul>
                            <div className="contDetails">
                                {/* <div className="contHead">
                                    Feel Like contacting us?
                                </div> */}
                                <div className="contListing">
                                    <ul>
                                        <li><a href="tel:(+1) 506 230 1388"> (+1) 506 230 1388</a></li>
                                        <li><a href="mailto: info@ehues.com"> info@ehues.com</a></li>                                       
                                    </ul>
                                </div>
                                <div className="socialLinks">
                                    <ul>                                       
                                        <li className="socialLink"><a href="#"> <FaFacebookF /> </a></li>
                                        <li className="socialLink"><a href="#"><FaInstagram /> </a></li>
                                        <li className="socialLink"><a href="#"><FaLinkedinIn /> </a></li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-8 detailSide">
                            <div className="row g-0 text-light align-items-center">
                                <div className="col-12 snglServivce">
                                    <div className="serTitle">Branding</div>
                                    <div className="serDetails">Let your brand steal the limelight.</div>
                                </div>
                                <div className="col-12 snglServivce">
                                    <div className="serTitle">Designing</div>
                                    <div className="serDetails">Give your website a look that speaks for itself</div>
                                </div>
                                <div className="col-12 snglServivce">
                                    <div className="serTitle">Development</div>
                                    <div className="serDetails">Build a website that provides state of the art solutions.</div>
                                </div>
                                <div className="col-12 snglServivce">
                                    <div className="serTitle">Apps</div>
                                    <div className="serDetails">Get ready to boost your sales with an ideal mobile app</div>
                                </div>                                
                                <div className="col-12 snglServivce">
                                    <div className="serTitle">Marketing</div>
                                    <div className="serDetails">Maximize Your Business Profits By Going Digital</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>                                             
        </header> 
        <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<About />} /> 
            <Route path="/expertise" element={<Expertise />} />                                      
            <Route path="/contact-us" element={<Contact />} />                      
        </Routes>
                      
    </>
  );
}

export default Header;
