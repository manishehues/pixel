import React from 'react';
import Estimate from '../components/estimate';
import InternalHeroArea from '../components/InternalHeroArea';


function Home(){   

    return(
        <div id="main" className="mainWrap container-fluid g-0">
            <InternalHeroArea
                idName="homeHeroArea"
                className="homeMain"
                colWidth="col-md-10 col-lg-8"
                smallTagLine="Bringing Your Vision to Life Online."
                bannerTitle="Empowering Your Digital World" 
                bannerDescription="We are a web development company based in India that specializes in offering a wide range of services aimed at helping brands enhance their digital presence and achieve online business growth."                           
                btnLink="https://forms.gle/fbFftGSRXGQueHur8"
                btnText="Let’s work together"
            />            
            <section id="biosSection" className="container-fluid section bios">
                <div className="container-lg">
                    <div className="row text-center g-0 justify-content-center">
                        <div className="col-md-9">
                            <h3 className="mb-3">Our expertise is in Canadian web design services, delivering outstanding solutions to elevate your business.</h3>
                            <p className="px-5 mt-2">Whether you need a brand new website or want to revamp an existing one, we have the skills and expertise to help you achieve your goals.</p>
                        </div>
                    </div>
                    <div className="row px-5 mt-5 text-center">
                        <div className="col snglService">
                            <img src="assets/images/branding.svg" alt="Branding" />
                            <div className="serName">Branding</div>
                        </div>
                        <div className="col snglService">
                            <img src="assets/images/designing.svg" alt="Branding" />
                            <div className="serName">Designing</div>
                        </div>
                        <div className="col snglService">
                            <img src="assets/images/development.svg" alt="Branding" />
                            <div className="serName">Development</div>
                        </div>
                        <div className="col snglService">
                            <img src="assets/images/marketing.svg" alt="Branding" />
                            <div className="serName">Marketing</div>
                        </div>
                        <div className="col snglService">
                            <img src="assets/images/eCommerce.svg" alt="Branding" />
                            <div className="serName">Branding</div>
                        </div>
                    </div>
                    <div className="row g-0 mt-5 text-center justify-content-center">
                        <div className="col-12 btnArea">
                            <a href="https://forms.gle/fbFftGSRXGQueHur8" target={"blank"} className="btn btn-primary">Let’s discuss your needs</a>
                        </div>
                    </div>
                </div>
            </section>            
            <section id="porSection" className="container-fluid g-0  latestProSection">
                <div className="gredBg">
                </div>                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pe-5 proSummary section">
                            <h3 className="text-light mb-4">Take a Look at <br/>Our Latest Projects</h3>
                            <p className="text-light mb-3">We integrate latest tools for best results in new industries, provide solutions for focused multidisciplinary firms.</p>
                            <div className="btnArea pt-3">
                                <a href="#" className="btn btn-primary">See all projects</a>
                            </div>
                            <div className="latProjects mt-5">
                                <img src="assets/images/brands.svg" alt="Latest Projects" />
                            </div>
                        </div>   
                        <div className="col-md-6 proDetails ps-5 section">
                            <div className="row g-0 sngProject" style={{background:'#FEB913'}}>
                                <div className="col-12 ps-5">
                                    <a  href="#" className="proImg">
                                        <img src="assets/images/sib.jpg" alt="Sisters In The Brothers" />
                                        <div className="extLink">
                                            <span className="one"></span>
                                            <span className="two"></span>
                                        </div>
                                    </a>
                                    <div className="proDescr pe-5">
                                        <div className="cateName">Case Studies</div>
                                        <h4>SIB - Sisters in the Brotherhood</h4>
                                        <p>The UBC is a diverse and inclusive in which thousands of women play a powerful role. The UBC is committed to providing the necessary skills, training, and resources to assist Sisters throughout their journey.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="row g-0 sngProject ubc" style={{background:'#E1B384'}}>
                                <div className="col-12 ps-5">
                                    <a  href="#" className="proImg">
                                        <img src="assets/images/ubc.jpg" alt="Sisters In The Brothers" />
                                        <div className="extLink">
                                            <span className="one"></span>
                                            <span className="two"></span>
                                        </div>
                                    </a>
                                    <div className="proDescr pe-5">
                                        <div className="cateName">Case Studies</div>
                                        <h4>Canadian District</h4>
                                        <p>The UBC Canadian District has been selected to be an intermediary for the Apprenticeship Service Program by the Canadian Government and to provide small and medium sized enterprises (SMEs) with financial incentives to hire first-year apprentices to get the hands-on work experience they need for a career in the skilled trades.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="row g-0 sngProject fj" style={{background:'#e97d6d'}}>
                                <div className="col-12 ps-5">
                                    <a  href="#" className="proImg">
                                        <img src="assets/images/fj-group.jpg" alt="Sisters In The Brothers" />
                                        <div className="extLink">
                                            <span className="one"></span>
                                            <span className="two"></span>
                                        </div>
                                    </a>
                                    <div className="proDescr pe-5">
                                        <div className="cateName">Case Studies</div>
                                        <h4>SIB - Sisters in the Brotherhood</h4>
                                        <p>We partner with beauty businesses like yours that can beneﬁt from our extensive journey and experience.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="row g-0 sngProject fj" style={{background:'#04d8fb'}}>
                                <div className="col-12 ps-5">
                                    <a  href="#" className="proImg">
                                        <img src="assets/images/true.jpg" alt="Sisters In The Brothers" />
                                        <div className="extLink">
                                            <span className="one"></span>
                                            <span className="two"></span>
                                        </div>
                                    </a>
                                    <div className="proDescr pe-5">
                                        <div className="cateName">Case Studies</div>
                                        <h4>Use True</h4>
                                        <p>Add social proof to boost your conversions and credibility. True is the trusted notifications and review tool that builds trust with your consumer.</p>
                                    </div>
                                </div>                                
                            </div>                             
                        </div>
                    </div>                    
                </div>
            </section>
            <section id="clientsReviews" className="container-fluid clientsReviews d-flex align-items-center ">
                <div className="container section border-bottom">
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-9 col-md-12">
                            <div className="row g-0 align-items-center ">
                                <div className="col-md-5 leftSide ps-5 clientDetails position-relative">                            
                                    <img src="assets/images/rumTan.jpg" alt="" />                            
                                </div>                                
                                <div className="col-md-7 ps-5 rightSide ">
                                    <h4><img src="assets/images/left-quote.svg" alt="Left Quote" /> Ehues' team created an exceptional WordPress site, with prompt feedback and outstanding commitment to quality and client satisfaction. Highly recommend for reliable and talented development services.</h4>
                                    <p className="mt-4 mb-4 textColor">Rum Tan, Co-Founder</p>
                                    <img src="assets/images/sm-tutor.svg" alt="Smile Tutor Agency" width="150px" />                            
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Estimate />
        </div>
    );
}

export default Home;