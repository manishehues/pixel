import React from 'react';
import Estimate from '../../../components/estimate';
import InternalHeroArea from '../../../components/InternalHeroArea';
import { FiMessageSquare, FiSliders, FiCode, FiFramer, FiFolder, FiGlobe, FiShoppingCart, FiLayers } from "react-icons/fi";

function MySolution(props) {
    return (
     <>
         <div className="snglSolution col-sm-3 text-center">
            <div className="iconWrap mb-3">                
                {props.icon}              
            </div>
            <h4 className="solTitle">{props.solutionTitle}</h4>
        </div>
     </>
    );
  }

function Brands(props) {
    return (
        <>
            <div className={`col-4 border snglProject p-3 ${props.className}`}>
                <a href={props.brandLink} target="_blank" className="card border-0 rounded-2 text-center">
                    <div className="card-body d-flex align-items-center  justify-content-center">
                        {props.classLogo}
                    </div>
                </a>
            </div>
        </>
    );
}

function Steps(props) {
    return (
        <>
            <div className="snglStep col text-center">
                <div className="stepNum">
                    {props.stepNum}
                </div>
                <h5 className="stepTitle text-light">{props.stepTitle}</h5>
            </div>
        </>
    );
}

function Portfolio(props){
    return(
        <>
            <div className="col-sm-6">
                <div className="card rounded-0 border-0  bg-transparent">
                    <div className="card-body p-0 text-light">
                        {props.proImage}
                        <h3 className="mt-4 text-center">{props.proTitle}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

function Development(){

    const solutonData = [
        {   
            
            icon: <FiSliders />,
            solutionTitle: "WordPress Plugin Customisation",
        },
        {
            icon: <FiCode />,
            solutionTitle: "WordPress Plugin Development",
        },
        {
            icon: <FiFramer />,
            solutionTitle: "WordPress Theme Customisation",
        },
        {
            icon: <FiFolder />,
            solutionTitle: "WordPress Custom Theme Development",
        },
        {
            icon: <FiGlobe />,
            solutionTitle: "WordPress Website Development",
        },
        {
            icon: <FiShoppingCart />,
            solutionTitle: "WordPress eCommerce Development",
        },
        {
            icon: <FiLayers />,
            solutionTitle: "WordPress Migration & Upgrade",
        },
        {
            icon: <FiMessageSquare />,
            solutionTitle: "WordPress Support & Maintenancen",
        },
        
      ];

    const brandData = [
        {  
            className: "border-top-0 border-start-0 ut",
            brandLink: "https://usetrue.com/",
            classLogo: <img src="assets/images/logos/true.svg" alt="" />,
        },
        {  
            className: "border-top-0 border-start-0 ll",
            brandLink: "https://littlelionsalon.com/",
            classLogo: <img src="assets/images/logos/littlelion.svg" alt="" />,
        },
        {  
            className: "border-top-0 border-start-0 rf border-end-0",
            brandLink: "https://renegadefit.com/",
            classLogo: <img src="assets/images/logos/renegade.svg" alt="" />,
        },
        {  
            className: "border-bottom-0 border-top-0 border-start-0 ob",
            brandLink: "https://oblios.com/",
            classLogo: <img src="assets/images/logos/oblio's.svg" alt="" />,
        },
        {  
            className: "border-bottom-0 border-top-0  border-start-0 bf",
            brandLink: "https://thebetterfuture.com/",
            classLogo: <img src="assets/images/logos/betterfuture.svg" alt="" />,
        },
        {  
            className: "border-bottom-0 border-top-0  border-start-0 ma border-end-0",
            brandLink: "https://themellowacademy.com/",
            classLogo: <img src="assets/images/logos/ma.svg" alt="" />,
        },        
           
      ];

    const stepsData = [
        {
            stepNum: "1",
            stepTitle: "Discussion"
        },
        {
            stepNum: "2",
            stepTitle: "Research"
        },
        {
            stepNum: "3",
            stepTitle: "Quotation"
        },
        {
            stepNum: "4",
            stepTitle: "Design"
        },
        {
            stepNum: "5",
            stepTitle: "Development"
        },
        {
            stepNum: "6",
            stepTitle: "Client Demo"
        },
        {
            stepNum: "7",
            stepTitle: "Launch"
        },     

      ]
    
    const PortData = [
        {
            proTitle: "Fox and Jane Salon",
            proImage: <img src="assets/images/fox-and-jane.jpg" alt="" />,
        },
        {
            proTitle: "Smile Tutor Agency",
            proImage: <img src="assets/images/smile-tutor.jpg" alt="" />,
        } 

    ]  

    return(
        <div id="main" className="mainWrap container-fluid g-0">
            <InternalHeroArea
                idName="wpDevelopment"
                className="wpDevelopment wordpress singleServices section"
                colWidth="col-sm-12 col-lg-10"
                smallTagLine=""
                bannerTitle={["WordPress Development Services", <br /> ," to Your Business"]}
                bannerDescription={["eHues Web Solutions is a leading provider of high-quality WordPress web development services, backed by a team of seasoned WordPress experts with years of experience in the industry. Our comprehensive services cover everything from designing and building custom WordPress websites to maintaining, updating, and migrating them to new platforms.", <br /> , <br /> ,"We have established ourselves as a trusted partner for enterprise-level engagements around the globe, delivering customized solutions that align with our clients' business objectives and help them achieve their online goals with WordPress. Whether you're using WordPress 4, 5, or 6, our team is proficient in all versions and can deliver efficient, effective, and tailored solutions that meet your organization's unique requirements.", <br /> , <br /> ,"From custom WordPress development and theme customization to plugin integration and website optimization, we provide end-to-end services that are designed to enhance your online presence and drive your business growth. Our commitment to excellence, innovation, and customer satisfaction has earned us a reputation as one of the top WordPress development companies in the industry."]}                                           
            />            
            <section id="projectLogos" className="container-fluid section pb-0 projectLogos">
                <div className="container">
                    <div className="row g-0 text-center mb-5">
                        <div className="col">
                            <h3>We have established a level of trust with them</h3>
                        </div>
                    </div>                    
                </div>
                <div className="container-sm">
                    <div className="row g-0">
                        {brandData.map((item, brandsIndex) => (
                            <Brands
                            key={brandsIndex}
                            className={item.className}
                            classLogo={item.classLogo}
                            brandLink={item.brandLink}
                            />
                        ))}
                    </div> 
                </div>                
                <div className="container-lg section">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 col-md-10 text-center">
                        <h3 className="mb-4">Create a website that delivers cutting-edge solutions for your needs.</h3>
                        <p>At eHues, we are a leading WordPress website development company known for our expertise, genuine approach, and leadership in WordPress innovation. We specialize in WordPress maintenance and support, catering to clients ranging from startups to multinational corporations. Our goal is to deliver excellence in the WordPress development industry.</p>
                        
                        <p>Our tailored WordPress website development services cover all aspects of the web development process, including consultation, UI/UX design, website architecture, testing, performance optimization, hosting, and support & maintenance. We take pride in being a trusted provider of WordPress web development services that help businesses grow, innovate, and create positive change, backed by years of </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="wpSolutions" className="container-fluid g-0 wpSolutions section pt-0">
                <div className="container-lg">
                    <div className="row g-0 text-center">
                        <div className="col-sm-12 mb-4">
                            <h3>Expertly WordPress Web Development Solutions</h3>
                        </div>
                    </div>
                    <div className="allSolutions row justify-content-center">
                        {solutonData.map((item, solIndex) => (
                            <MySolution
                            key={solIndex}
                            icon={item.icon}
                            solutionTitle={item.solutionTitle}
                            />
                        ))}                                                                    
                    </div>
                </div>                
            </section> 
            <section id="clientsReviews" className="container-fluid clientsReviews serviceReviews d-flex align-items-center ">
                <div className="container pt-0 section border-bottom">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 text-center mb-4">
                            <h2>What our client say</h2>
                        </div>
                    </div>
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
            <section id="method" className="container-fluid method section g-0">
                <div className="container">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 col-md-7 text-center">
                            <h3>Our Approach to Delivering Successful WordPress Web Development</h3>
                        </div>
                    </div>
                </div>                
            </section>
            <section id="allSteps" className="container-fluid allSteps section pt-0 mt-5 g-0">
                <div className="container g-0">
                    <div className="row g-3 justify-content-center mb-5">
                        {stepsData.map((item, stepsIndex) => (
                            <Steps
                            key={stepsIndex}
                            stepTitle={item.stepTitle}
                            stepNum={item.stepNum}
                            />
                        ))}                                              
                    </div>                                        
                </div>
                <div className="container-lg">
                    <div className="row text-center pt-5 ">
                        <div className="col-sm-12 text-light mb-4">
                            <h2>Case Studies</h2>
                        </div>                                               
                    </div>
                    <div className="row gx-5">
                        {PortData.map((item, portIndex) => (
                            <Portfolio
                            key={portIndex}
                            proTitle={item.proTitle}
                            proImage={item.proImage}
                            />
                        ))}
                    </div> 
                </div>
            </section>    
            <Estimate />            
        </div>
    );
}

export default Development;