import React from 'react';
import {Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Estimate from '../components/estimate';

function Contact(){
    return(
        <div id="main" className="mainWrap container-fluid g-0">
            <section id="contHeroArea" className="herArea container-fluid homeMain d-flex align-items-center">
                <div className="container">
                    <div className="row g-0 justify-content-center text-center ">
                        <div className="col-md-10 text-light">
                            <div className="smallTagLine">Contact Us</div>
                            <h2>Always seeking the <br />next big thing!</h2>
                            <p className="text-light">Don't wait - get in touch and let's move things forward!</p> 
                            <div className="btnArea mt-4">
                                <a href="https://forms.gle/fbFftGSRXGQueHur8" target={"blank"} className="btn btn-light">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid contArea-detail">
                <div className="container section pb-5">
                    <div className="row g-0 flex-row-reverse justify-content-center">
                        {/* <div className="col-sm-7 enquiryForm ps-5">                            
                            <h3>Start a Conversation</h3>
                            <p>Contact us and we'll reply promptly regarding ideas, people, or networking opportunities.</p>
                            <ContactForm/>
                        </div>
                        <div className="col-sm-1">
                        </div> */}
                        <div className="col-sm-4 equiryNum text-center">
                            <div className="card border-0 p-0 bsEnquiry">
                                <div className="card-body p-0">
                                    <h3>Business enquiries</h3>
                                    <p>Ready to take your business to the next level? We're here to support your journey</p>
                                    <h3><a href="tel:+1 506 230 1388"> +1 506 230 1388</a></h3>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;