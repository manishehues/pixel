import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Expertise from '../pages/expertise';
import Career from '../pages/career';
import Development from '../pages/services/wordpress/deveopment';
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
                                    <li className="nav-item"><NavLink to="/careers" className="nav-link" onClick={closeMenu}>Career</NavLink></li>                                 
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
                                <li className="nav-item d-none"><NavLink to="/careers          " className="nav-link" onClick={closeMenu}>Career</NavLink></li>
                                <li className="nav-item serviceMenu"><NavLink to="/expertise    " className="nav-link" onClick={closeMenu}>Services</NavLink></li>
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
                                <div className="col-4 snglServivce">
                                    <div className="serTitle">WordPress</div>
                                    <ul>
                                        <li><NavLink to="/wordpress-development" className="nav-link" onClick={closeMenu}>Development</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Maintenance and Support</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Blogs and personal</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Business websites</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Migration</NavLink></li>
                                    </ul>                                    
                                </div>                                
                                <div className="col-4 snglServivce ">
                                    <div className="serTitle">Design</div>
                                    <ul>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Web Design</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>UI/UX Design</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Apps Design</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Website Prototypes</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Graphic Design</NavLink></li>
                                    </ul>                                    
                                </div>
                                <div className="col-4 snglServivce">
                                    <div className="serTitle">Technologies</div>
                                    <ul>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Web Development</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>CMS Development</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>eCommerce Development</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Web Software Development</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Custom Development</NavLink></li>
                                    </ul>                                    
                                </div> 
                                <div className="col-5 snglServivce">
                                    <div className="serTitle">Digital Marketing</div>
                                    <ul>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Search Engine Optimization (SEO)</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Content Writing</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Social Media Marketing (SMM)</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Video Marketing</NavLink></li>
                                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Web Analytics and Data-Driven</NavLink></li>
                                    </ul>                                    
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
            <Route path="/careers" element={<Career />} />                                      
            <Route path="/contact-us" element={<Contact />} />                      
            <Route path="/wordpress-development" element={<Development />} />                      
        </Routes>
                      
    </>
  );
}

export default Header;
