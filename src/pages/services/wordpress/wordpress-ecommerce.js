import React from 'react';
import Estimate from '../../../components/estimate';
import InternalHeroArea from '../../../components/InternalHeroArea';
import { FiMessageSquare, FiCreditCard, FiBriefcase, FiCode, FiFramer, FiFolder, FiGlobe, FiShoppingCart, FiLayers } from "react-icons/fi";
import { TbAffiliate } from "react-icons/tb";
import { GrIntegration } from "react-icons/gr";

function MySolution(props) {
    return (
     <>
         <div className="snglSolution col text-center">
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

function Ecommerce(){

    const solutonData = [
        {
            icon: <FiShoppingCart />,
            solutionTitle: "Online Custom WordPress e-Stores",
        },
        {   
            
            icon: <FiCreditCard />,
            solutionTitle: "Custom Payment Solutions for WordPress",
        },
        {
            icon: <TbAffiliate />,
            solutionTitle: "WordPress Affiliate Integration Services",
        },
        {
            icon: <FiBriefcase />,
            solutionTitle: "WordPress B2B/B2C Integration Services",
        },
        {
            icon: <GrIntegration />,
            solutionTitle: "Integrated WordPress Third Party Solutions",
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
                idName="wpEcommerce"
                className="wpEcommerce wordpress singleServices section"
                colWidth="col-sm-12 col-lg-8"
                smallTagLine=""
                bannerTitle={["Transform Your Online Store with", <br /> ," WordPress eCommerce Service"]}
                bannerDescription={["At our company, we understand the importance of linking content, customers, and commerce in the world of online business. That's why we specialize in building highly accessible, scalable, and engaging e-commerce stores for your business that drive traffic and boost revenue.", <br /> , <br /> ,"Our team of experts works tirelessly to design and develop an e-store that is customized to your business needs, ensuring that your customers have a seamless shopping experience. From creating an attractive and user-friendly website layout to integrating payment gateways and inventory management systems, we cover every aspect of your e-commerce development needs.", <br /> , <br /> ,"We aim to build e-stores that are not only functional but also visually appealing, and we use the latest web technologies and design trends to achieve this. Our solutions are also optimized for search engines, making your store more discoverable to potential customers." , <br /> , <br /> , "With our focus on accessibility, scalability, and engagement, you can be sure that your e-commerce store will not only meet your current needs but also grow with your business. So if you're looking to take your online business to the next level, look no further than our team of experts."]}
            />            
            <section id="projectLogos" className="container-fluid section pb-0 projectLogos">
                {/* <div className="container">
                    <div className="row g-0 text-center mb-5">
                        <div className="col">
                            <h3>We have established a level of trust with them</h3>
                        </div>
                    </div>                    
                </div>
                <div className="container-sm">
                    <div className="row g-0">
                        {brandData.map((item, index) => (
                            <Brands
                            key={index}
                            className={item.className}
                            classLogo={item.classLogo}
                            brandLink={item.brandLink}
                            />
                        ))}
                    </div> 
                </div>                 */}
                <div className="container-lg">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 col-md-10 text-center">
                        <h3 className="mb-4">Explore New Possibilities with Custom WordPress eCommerce Development</h3>
                        <p>At eHues, we specialize in providing customized and customer-centric WordPress eCommerce solutions that cater to the unique requirements of online retailers and their customers.</p>
                        
                        <p>Our team of skilled and experienced WordPress eCommerce developers is committed to delivering flexible and robust solutions that meet your business objectives. From UX design to data migration, performance optimization, security solutions, and more, we have everything covered for all aspects of online shopping. </p>

                        <p>We understand that an engaging and seamless user experience is critical for the success of your WordPress eCommerce store, and that's why we focus on creating solutions that are both visually appealing and user-friendly. Our expertise in WordPress eCommerce development enables us to provide tailored solutions that address your specific business needs and challenges.</p>

                        <p>With our commitment to flexibility, scalability, and customer-centricity, we ensure that your WordPress eCommerce store is optimized to provide a seamless online shopping experience for your customers. So if you're looking for a reliable partner for your WordPress eCommerce development needs, look no further than Ehues Web Solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="wpSolutions" className="container-fluid g-0 wpSolutions section">
                <div className="container">
                    <div className="row g-0 text-center">
                        <div className="col-sm-12 mb-4">
                            <h3>Comprehensive WordPress eCommerce Development Services for Your Online Store</h3>
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
                            <h3>Our Approach to Delivering Successful WordPress eCommerce Development</h3>
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
                    <div className="row gx-5 text-center pt-5 ">
                        <div className="col-sm-12 text-light mb-4">
                            <h2>Case Studies</h2>
                        </div>                                               
                    </div>
                    <div className="row gx-5">
                        {PortData.map((item, portfolioIndex) => (
                            <Portfolio
                            key={portfolioIndex}
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

export default Ecommerce;