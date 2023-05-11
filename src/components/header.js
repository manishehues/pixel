import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Expertise from '../pages/expertise';
import Career from '../pages/career';
import Development from '../pages/services/wordpress/wordpress-development';
import Ecommerce from '../pages/services/wordpress/wordpress-ecommerce';
import BusinessWebsite from '../pages/services/wordpress/wordpress-business-website';
import MigrateUpdates from '../pages/services/wordpress/wordpress-migrate-upgrade';
import MaintenanceSupport from '../pages/services/wordpress/wordpress-maintenance-support';
import Estimate from './estimate';
import $ from "jquery";


function Header() {

    const [showComponent, setShowComponent] = useState(true);

    const [activeItem, setActiveItem] = useState(null);    
    const serviceHandleClick = (index) => {
        setActiveItem(index);
        const elements = document.getElementsByClassName("snglServivce");
            for (let i = 0; i < elements.length; i++) {
            if (i === index) {
                elements[i].classList.toggle("active");
            } else {
                elements[i].classList.remove("active");
            }
        }
    };

    const resetSelection = () => {
        const elements = document.getElementsByClassName("snglServivce");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("active");
        }
        setActiveItem(null);
      };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
      
    

    const [isActive, setIsActive] = useState(false); 
    const [SubMenuisActive, setSubMenuIsActive] = useState(false); 
    const closeMenu = () => {
        setIsActive(false)
        setSubMenuIsActive(false)
        resetSelection()                
    }
    const handleClick = event => {  
        setIsActive(current => !current);
        setSubMenuIsActive(false) 
    };
    const subMenuHandleClick = event => {  
        setSubMenuIsActive(current => !current);
    };
     

   
    
  return (    <> 
    
        <header className="siteHeader container-fluid g-0 ">
        <motion.div style={{ scaleX }}  className="progress-bar" />         
            <div className="container-fluid g-0 topPart">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-3 d-flex align-items-center leftSide">
                            <div className="menuBar d-inline">
                                <div className={`bars ${isActive ? 'activeBar' : ''}`} onClick={() => {handleClick(); resetSelection(); }}>
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
                        <div className="col-4 serSides deskMediDevice">
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
                        <div className="col-4 serSides mobileDevice" style={{display:'none'}}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item d-none"><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
                                <li className="nav-item d-none"><NavLink to="/expertise" className="nav-link" onClick={closeMenu}>Expertise</NavLink></li>
                                <li className="nav-item d-none"><NavLink to="/careers" className="nav-link" onClick={closeMenu}>Career</NavLink></li>
                                <li className={`nav-item ${SubMenuisActive ? 'openSubMenu' : ''}`}>
                                    <NavLink to="javascript:void(0)" className="nav-link" onClick={subMenuHandleClick}>Services <span></span></NavLink>
                                    <div className="container-fluid g-0 detailSide">
                                        <div className="row g-0 text-light">                                
                                            <div className={`col-md-6 snglServivce ${activeItem === "0" ? "active" : ""}`}>
                                                <div className="serTitle" onClick={() => {setActiveItem(0); serviceHandleClick(0); }}>WordPress <FaAngleRight /></div>
                                                <ul>
                                                    <li><NavLink to="/wordpress-development" className="nav-link" onClick={closeMenu}>WordPress Development</NavLink></li>
                                                    <li><NavLink to="/wordpress-ecommerce" className="nav-link" onClick={closeMenu}>WordPress eCommerce</NavLink></li>
                                                    <li><NavLink to="/wordpress-business-websites" className="nav-link" onClick={closeMenu}>WordPress Business Websites</NavLink></li>
                                                    <li><NavLink to="/wordpress-migrate-upgrade" className="nav-link" onClick={closeMenu}>WordPress Migration and Upgrade</NavLink></li>
                                                    <li><NavLink to="/wordperss-maintenance-support" className="nav-link" onClick={closeMenu}>WordPress Maintenance and Support</NavLink></li>
                                                </ul>                                    
                                            </div>
                                            <div className={`col-md-6 snglServivce ${activeItem === "1" ? "active" : ""}`}>
                                                <div className="serTitle" onClick={() => {setActiveItem(1); serviceHandleClick(1); }}>Technologies <FaAngleRight /></div>
                                                <ul>
                                                    <li><NavLink to="/web-development" className="nav-link" onClick={closeMenu}>Web Development</NavLink></li>
                                                    <li><NavLink to="/cms-development" className="nav-link" onClick={closeMenu}>CMS Development</NavLink></li>
                                                    <li><NavLink to="/eCommerce-development" className="nav-link" onClick={closeMenu}>eCommerce Development</NavLink></li>
                                                    <li><NavLink to="/web-solftware" className="nav-link" onClick={closeMenu}>Web Software Development</NavLink></li>
                                                    <li><NavLink to="/custom-development" className="nav-link" onClick={closeMenu}>Custom Development</NavLink></li>
                                                </ul>                                    
                                            </div>
                                            <div className={`col-md-6 snglServivce ${activeItem === "2" ? "active" : ""}`}>
                                                <div className="serTitle" onClick={() => {setActiveItem(2); serviceHandleClick(2); }}>Digital Marketing <FaAngleRight /></div>
                                                <ul>
                                                    <li><NavLink to="/seo" className="nav-link" onClick={closeMenu}>Search Engine Optimization (SEO)</NavLink></li>
                                                    <li><NavLink to="/content-writing" className="nav-link" onClick={closeMenu}>Content Writing</NavLink></li>
                                                    <li><NavLink to="/smm" className="nav-link" onClick={closeMenu}>Social Media Marketing (SMM)</NavLink></li>
                                                    <li><NavLink to="/video-marketing" className="nav-link" onClick={closeMenu}>Video Marketing</NavLink></li>
                                                    <li><NavLink to="/Web-Analytics" className="nav-link" onClick={closeMenu}>Web Analytics and Data-Driven</NavLink></li>
                                                </ul>                                    
                                            </div>                                    
                                            <div className={`col-md-6 snglServivce ${activeItem === "3" ? "active" : ""}`}>
                                                <div className="serTitle" onClick={() => {setActiveItem(3); serviceHandleClick(3); }}>Design <FaAngleRight /></div>
                                                <ul>
                                                    <li><NavLink to="/web-design" className="nav-link" onClick={closeMenu}>Web Design</NavLink></li>
                                                    <li><NavLink to="/uiux-design" className="nav-link" onClick={closeMenu}>UI/UX Design</NavLink></li>
                                                    <li><NavLink to="/apps-design" className="nav-link" onClick={closeMenu}>Apps Design</NavLink></li>
                                                    <li><NavLink to="/website-prototype" className="nav-link" onClick={closeMenu}>Website Prototypes</NavLink></li>
                                                    <li><NavLink to="/graphic-design" className="nav-link" onClick={closeMenu}>Graphic Design</NavLink></li>
                                                </ul>                                    
                                            </div>                                                                                   
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item mb-0"><NavLink to="/case-studies" className="nav-link" onClick={closeMenu}>Case Studies</NavLink></li>                                                               
                            </ul>
                            <div className="contDetails">                               
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
                                <div className="col-6 snglServivce">
                                    <div className="serTitle">WordPress</div>
                                    <ul>
                                        <li><NavLink to="/wordpress-development" className="nav-link" onClick={closeMenu}>WordPress Development</NavLink></li>
                                        <li><NavLink to="/wordpress-ecommerce" className="nav-link" onClick={closeMenu}>WordPress eCommerce</NavLink></li>
                                        <li><NavLink to="/wordpress-business-websites" className="nav-link" onClick={closeMenu}>WordPress Business Websites</NavLink></li>
                                        <li><NavLink to="/wordpress-migrate-upgrade" className="nav-link" onClick={closeMenu}>WordPress Migration and Upgrade</NavLink></li>
                                        <li><NavLink to="/wordperss-maintenance-support" className="nav-link" onClick={closeMenu}>WordPress Maintenance and Support</NavLink></li>
                                    </ul>                                    
                                </div>
                                <div className="col-6 snglServivce">
                                    <div className="serTitle">Technologies</div>
                                    <ul>
                                        <li><NavLink to="/web-development" className="nav-link" onClick={closeMenu}>Web Development</NavLink></li>
                                        <li><NavLink to="/cms-development" className="nav-link" onClick={closeMenu}>CMS Development</NavLink></li>
                                        <li><NavLink to="/eCommerce-development" className="nav-link" onClick={closeMenu}>eCommerce Development</NavLink></li>
                                        <li><NavLink to="/web-solftware" className="nav-link" onClick={closeMenu}>Web Software Development</NavLink></li>
                                        <li><NavLink to="/custom-development" className="nav-link" onClick={closeMenu}>Custom Development</NavLink></li>
                                    </ul>                                    
                                </div>
                                <div className="col-6 snglServivce">
                                    <div className="serTitle">Digital Marketing</div>
                                    <ul>
                                        <li><NavLink to="/seo" className="nav-link" onClick={closeMenu}>Search Engine Optimization (SEO)</NavLink></li>
                                        <li><NavLink to="/content-writing" className="nav-link" onClick={closeMenu}>Content Writing</NavLink></li>
                                        <li><NavLink to="/smm" className="nav-link" onClick={closeMenu}>Social Media Marketing (SMM)</NavLink></li>
                                        <li><NavLink to="/video-marketing" className="nav-link" onClick={closeMenu}>Video Marketing</NavLink></li>
                                        <li><NavLink to="/Web-Analytics" className="nav-link" onClick={closeMenu}>Web Analytics and Data-Driven</NavLink></li>
                                    </ul>                                    
                                </div>                                    
                                <div className="col-6 snglServivce ">
                                    <div className="serTitle">Design</div>
                                    <ul>
                                        <li><NavLink to="/web-design" className="nav-link" onClick={closeMenu}>Web Design</NavLink></li>
                                        <li><NavLink to="/uiux-design" className="nav-link" onClick={closeMenu}>UI/UX Design</NavLink></li>
                                        <li><NavLink to="/apps-design" className="nav-link" onClick={closeMenu}>Apps Design</NavLink></li>
                                        <li><NavLink to="/website-prototype" className="nav-link" onClick={closeMenu}>Website Prototypes</NavLink></li>
                                        <li><NavLink to="/graphic-design" className="nav-link" onClick={closeMenu}>Graphic Design</NavLink></li>
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
            <Route path="/wordpress-ecommerce" element={<Ecommerce />} />                      
            <Route path="/wordpress-business-websites" element={<BusinessWebsite />} />                      
            <Route path="/wordpress-migrate-upgrade" element={<MigrateUpdates />} />                      
            <Route path="/wordperss-maintenance-support" element={<MaintenanceSupport />} />                      
        </Routes>
                      
    </>
  );
}

export default Header;
