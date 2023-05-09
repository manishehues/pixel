import React from 'react';
import Estimate from '../../../components/estimate';
import InternalHeroArea from '../../../components/InternalHeroArea';
import { FiSliders, FiGlobe, FiLayers } from "react-icons/fi";
import { BiMobileAlt, BiSelectMultiple, BiCodeCurly } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";

function MySolution(props) {
    return (
     <>
         <div className="snglSolution col-sm-4 text-center">
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

function MigrateUpdates(){

    const solutonData = [
        {   
            
            icon: <FiSliders />,
            solutionTitle: "Modular Website Development",
        },
        {
            icon: <BiMobileAlt />,
            solutionTitle: "Mobile Responsive Approach",
        },
        {
            icon: <BiSelectMultiple />,
            solutionTitle: "Multi-channel Content Distribution",
        },
        {
            icon: <AiOutlineApi />,
            solutionTitle: "Restful Web Services Integration",
        },
        {
            icon: <BiCodeCurly />,
            solutionTitle: "Custom Functionality Development",
        },
        {
            icon: <FiLayers />,
            solutionTitle: "User-friendly Migration and Updates",
        }
        
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
                idName="wpMigratUpdates"
                className="wpMigratUpdates wordpress singleServices section"
                colWidth="col-sm-12 col-lg-10"
                smallTagLine=""
                bannerTitle={["WordPress Migration and Updates Services"]}
                bannerDescription={["WordPress Websites are a powerful tool for companies looking to enhance their online presence, drive traffic to their website, and increase their revenue. WordPress is a flexible and user-friendly content management system that enables businesses to create dynamic and engaging websites that are easy to navigate and optimized for search engines.", <br /> , <br /> ,"At our company, we specialize in creating WordPress Business Websites that are tailored to meet the unique requirements of our clients. Our team of experienced WordPress developers understands the importance of having a strong online presence, and we work closely with our clients to ensure that their WordPress Business Websites align with their business objectives and online goals.", <br /> , <br /> ,"We offer a wide range of WordPress Business Website services, including custom WordPress development, theme customization, plugin integration, and website optimization. Our solutions are designed to enhance your online presence, drive traffic to your website, and increase your revenue. We also provide ongoing maintenance and support to ensure that your WordPress Business Website remains up-to-date and secure.", <br /> , <br /> , "As a leading provider of WordPress Business Websites, we have helped numerous businesses around the globe achieve their online goals. Our commitment to excellence, innovation, and customer satisfaction has earned us a reputation as one of the top WordPress development companies in the industry.", <br /> , <br /> , "If you're looking for a reliable and experienced partner to help you create a WordPress Business Website that delivers results, look no further than our company. Contact us today to learn how we can help you enhance your online presence and drive your business growth with a WordPress Business Website."]}                                     
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
                        <div className="col-sm-12 col-lg-10 text-center">
                        <h3 className="mb-4">Migrate to WordPress and unlock endless possibilities for your online success.</h3>
                        <p>Ehues is a leading WordPress web development company known for their outstanding work, transparent approach, and expertise in WordPress innovation.</p>
                        
                        <p>Whether you're planning to upgrade to the latest version of WordPress (currently WordPress 6) or migrate from a legacy platform or custom CMS to WordPress, our team at Ehues has the knowledge and resources to deliver exceptional results.</p>

                        <p>Using an agile methodology, our experienced WordPress developers will seamlessly migrate your data and ensure a smooth transition. We offer a flexible and proven engagement model that starts with a comprehensive analysis of your organization's IT requirements to ensure that the best WordPress upgrade or migration solution is implemented effectively and efficiently, and meets your development objectives and deadlines.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="wpSolutions" className="container-fluid g-0 wpSolutions section pt-0">
                <div className="container-lg">
                    <div className="row g-0 text-center">
                        <div className="col-sm-12 mb-4">
                            <h3>How a WordPress Migration Can Maximize <br />Your Business Potential</h3>
                        </div>
                    </div>                    
                </div>
                <div className="container-sm">
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
                            <h3>Our Approach to Delivering Successful WordPress Business Websites</h3>
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

export default MigrateUpdates;