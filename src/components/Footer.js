import React from "react";

function Footer(){
    return(
        <>
            <div id="siteFooter" className="siteFooter container-fluid g-0">
                <div className="container">                    
                    <div className="row g-0 justify-content-center mt-5 siteFooterMenu">
                        <div className="col-md-8 ps-5">
                            <div className="row ps-5 justify-content-center">
                                <div className="col-3 footerMenu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Expertise</a></li>
                                        <li><a href="#">Case Studies</a></li>                                        
                                    </ul>
                                </div>
                                <div className="col-3 footerMenu">
                                    <ul>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">Designing</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                    </ul>
                                </div>
                                <div className="col-3 footerMenu">
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Linkedin</a></li>                                        
                                        <li><a href="#">Instagram</a></li>                                        
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="row g-0 text-center justify-content-center siteCopyright border-top mt-5 align-items-center">
                        <div className="col text-start">
                            <div className="copyright leftSide border-end">
                                <p>Copyrights <strong>2023</strong></p>
                            </div> 
                            <div className="copyright rightSide">
                                <p><strong>eHues Web Solutions</strong>
                                All Rights Reserved</p>
                            </div>                       
                        </div>
                        <div className="col text-end callUs ">
                            <h5 className="mb-0"><strong>You also have the option to send your profile to</strong> info@ehues.com</h5>                                                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;