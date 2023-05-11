import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Estimate from '../../../components/estimate';
import InternalHeroArea from '../../../components/InternalHeroArea';
import { FiSliders,  FiLayers } from "react-icons/fi";
import { BiMobileAlt, BiSelectMultiple, BiCodeCurly } from "react-icons/bi";
import { AiOutlineApi, } from "react-icons/ai";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

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

function MaintenanceSupport(){

    {/* Plans/Pricing/Packages Data  */}
    
    const [hourly, setHourly] = useState('hourly');

     const [basic, setBasic] = useState('19<sub>.99/hr</sub>');    
     const [business, setBusiness] = useState(' 25<sub>.99/hr</sub>');    
     const [premium, setPremium] = useState(' 33<sub>.99/hr</sub>');    
     const [enterises, setEnterises] = useState(' 42<sub>.99/hr</sub>');    
  
    function handleUpdate() {
        setBasic('179<sub>.99/mo</sub>') ;
        setBusiness('229<sub>.99/mo</sub>') ;
        setPremium('329<sub>.99/mo</sub>') ;
        setEnterises('569<sub>.99/mo</sub>') ;
        setHourly('monthly') ;
    }
  
    function handleRevert() {
        setBasic('19<sub>.99/hr</sub>');
        setBusiness('25<sub>.99/hr</sub>');
        setPremium('33<sub>.99/hr</sub>');
        setEnterises('42<sub>.99/hr</sub>');
        setHourly('hourly') ;
    }
    
    
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
                idName="wpMaintenanceSupport"
                className="wpMaintenanceSupport wordpress singleServices section"
                colWidth="col-sm-12 col-lg-10"
                smallTagLine=""
                bannerTitle={["WordPress Maintenance and Support Services for Smooth Website Operation"]}
                bannerDescription={["At eHues Web Solutions, we offer top-notch WordPress maintenance and support services to help businesses keep their WordPress websites running smoothly and efficiently. Our team of experienced WordPress experts provides comprehensive support services, including updates, backups, security, troubleshooting, and more.", <br /> , <br /> ,"We understand that maintaining a WordPress website can be time-consuming and complex, which is why we offer flexible maintenance packages that are tailored to meet the unique needs of businesses. Our services are designed to ensure that your WordPress website is always up-to-date, secure, and performing at its best.", <br /> , <br /> ,"From regular backups and updates to fixing issues and resolving conflicts, we provide end-to-end WordPress maintenance and support services that are designed to keep your website running smoothly. We also offer custom solutions that can be tailored to meet the specific requirements of your business.", <br /> , <br /> , "At eHues Web Solutions, we are committed to providing exceptional WordPress maintenance and support services that help businesses enhance their online presence and achieve their growth objectives. Contact us today to learn how we can help you keep your WordPress website running smoothly."]}
                btnText="View Our Pricing"
                btnLink="#pricing"
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
                        {brandData.map((item, brandsIndex) => (
                            <Brands
                            key={brandsIndex}
                            className={item.className}
                            classLogo={item.classLogo}
                            brandLink={item.brandLink}
                            />
                        ))}
                    </div> 
                </div>                 */}
                <div className="container-lg section pt-0">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 col-lg-10 text-center">
                        <h3 className="mb-4">Get continuous 24X7 support <br />for your WordPress site</h3>
                        <p>At eHues Web Solutions, we understand the importance of ensuring that your WordPress website runs smoothly and securely. That's why we offer a comprehensive range of WordPress support and maintenance services to help you keep your site up-to-date, secure, and fully functional.</p>
                        
                        <p>Our team of experienced WordPress experts is available 24/7 to provide on-demand support and maintenance services that adhere to the highest industry standards. We offer a range of services, including bug fixes, content updates, code review, security upgrades, version upgrades, hosting, and more.</p>

                        <p>With our flexible and cost-effective WordPress support and maintenance services, you can rest assured that your website is always running at its best, and any issues are promptly resolved. Whether you need regular updates, security patches, or emergency support, our team is here to help you.</p>

                        <p>At eHues, we are committed to providing top-notch WordPress support and maintenance services to our clients. Contact us today to learn more about how we can help you ensure that your WordPress website is always up-to-date, secure, and performing at its best.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="reasons" className="container-fluid reasons g-0">
                <div className="container">
                    <div className="row text-light align-items-start first section pb-0">
                        <div className="col-md-5 text-end heading">
                            <h2>Abandoned by developers? Get back on track with our expert support services for your WordPress site.</h2>
                        </div>
                        <div className="col-md-7 content">
                            <p>If you find yourself in a situation where your WordPress site has been launched, but there's no one around to continue working on it, eHues Web Solutions is here to help. We understand the importance of ongoing support and maintenance for your WordPress site, and we offer comprehensive services to ensure your site continues to meet your evolving business needs. Our experienced team of WordPress experts provides a range of services, including bug fixes, security upgrades, website content updates, and version upgrades. We also offer on-demand support options that adhere to the highest level of security and industry standards. With our continuous 24x7 support, you can rest assured knowing your WordPress site is always in good hands.</p>
                            <p>At eHues Web Solutions, we understand that your website is a product that requires continuous improvement processes to stay up-to-date with market trends and customer expectations. That's why we work with you to ensure that your WordPress site remains secure, optimized, and up-to-date with the latest technology and best practices. Our WordPress maintenance and support services are tailored to meet your unique requirements, and we work closely with you to ensure that your site aligns with your business objectives and online goals. Contact us today to learn more about how we can help you keep your WordPress site running smoothly and maximize its potential.</p>                            
                        </div>
                    </div>                    
                    <div className="row text-light second align-items-start section pb-0 flex-row-reverse">
                        <div className="col-md-5 heading">
                            <h2>Without a dedicated support team, you may face challenges.</h2>
                        </div>
                        <div className="col-md-7 content">
                            <p>It's not uncommon for businesses to find themselves without a dedicated support team after the launch of their WordPress site. At eHues Web Solutions, we understand the importance of ongoing support and maintenance for your site. Our team of experienced WordPress experts provides comprehensive maintenance and support services to ensure your site remains secure, optimized, and up-to-date with the latest technology and best practices.</p>
                            <p>Even if you've developed your WordPress site in-house, it can be a challenge to maintain it if your team is stretched too thin or if someone leaves the company. With our continuous 24x7 support, you can have peace of mind knowing that your WordPress site is always in good hands, and any issues will be promptly resolved. Contact us today to learn more about how we can help you keep your WordPress site running smoothly and maximize its potential.</p>
                        </div>
                    </div>
                    <div className="row text-light align-items-start first section">
                        <div className="col-md-5 text-end heading">
                            <h2>Your website is experiencing functionality issues and needs attention to ensure optimal performance.</h2>
                        </div>
                        <div className="col-md-7 content">
                            <p>Overlooking updates and maintenance on your WordPress site can lead to common issues like sudden downtime. At eHues Web Solutions, we offer comprehensive maintenance and support services to keep your site running smoothly. Contact us today to learn more about how we can help.</p>
                            <ul>
                                <li>Your WordPress admin panel or configuration page shows available security updates.</li>
                                <li>Your site is running an older version of WordPress.</li>
                                <li>WordPress "Status Reports" are indicating that updates are available.</li>
                                <li>You have received an update notice from WordPress.org for the super admin user.</li>
                                <li>Your site is running slowly, or there are broken URLs.</li>
                                <li>You are experiencing an increase in errors in Google Webmaster tools.</li>
                                <li>You can't remember the last time your WordPress site was updated.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>            
            <section id="clientsReviews" className="container-fluid clientsReviews serviceReviews d-flex align-items-center ">
                <div className="container section border-bottom">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 text-center mb-4">
                            <h2>What our client say</h2>
                        </div>
                    </div>
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-9 col-md-12">
                            <div className="row g-0 align-items-center ">
                                <div className="col-md-5 leftSide clientDetails position-relative">                            
                                    <img src="assets/images/rumTan.jpg" alt="" />                            
                                </div>                                
                                <div className="col-md-7 ps-3 rightSide ">
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
                    <div className="row g-0 justify-content-center text-center">
                        <div className="col-sm-12">
                            <h2 className="mb-4">Get assistance from a trusted team of WordPress specialists.</h2>                           
                        </div>
                        <div className="col-sm-12 col-lg-10">
                            <p>Don't let limited resources or in-house inflexibility leave you without support. At eHues Web Solutions, we offer website support and maintenance services with a team of over 20+ experts ready to help. Whether you need assistance with your in-house team or outside agency, we work collaboratively and productively to ensure your WordPress site runs smoothly and meets your business needs. Contact us today to learn more about how we can help provide the support you need.</p>
                            <p>At eHues Web Solutions, we understand the challenges businesses face when it comes to website maintenance and support. That's why we offer comprehensive WordPress maintenance and support services to help you keep your site running smoothly and efficiently. Our team of experienced WordPress experts can provide you with ongoing support, regular maintenance, and updates to ensure your site remains secure, optimized, and up-to-date with the latest technology and industry best practices.</p>
                            <p>We work with you to create a customized support plan that meets your specific needs and fits within your budget. From minor bug fixes and security upgrades to website content updates and version upgrades, we've got you covered. With our 24/7 support and dedicated team of experts, you can have peace of mind knowing your WordPress site is in good hands. Contact us today to learn more about our WordPress maintenance and support services and how we can help you maximize the potential of your website.</p>
                        </div>
                    </div>
                </div>                
            </section>
            <section id="pricing" className="container-fluid pricing section pb-0 g-0">                
                <div className="container-lg">
                    <div className="row g-0 justify-content-center">
                        <div className="col-sm-12 col-lg-8 text-center text-light">
                            <h3>Simple pricing that scales with your Business Improve</h3>
                        </div>
                        <div className="col-sm-12">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
                        <div className="row g-0 justify-content-center ">
                            <div className="col-sm-6 packageTitles">
                                <Nav variant="pills" className="flex-divumn">
                                    <Nav.Item>
                                        <Nav.Link eventKey="basic">
                                            <div className="circleWrap">                                                
                                                Basic
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="business">
                                            <div className="circleWrap">                                                
                                                Business
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="premium">
                                            <div className="circleWrap">                                                
                                                Premium
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="enterprises">
                                            <div className="circleWrap">                                                
                                                Enterprises
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>                                   
                                </Nav>
                            </div>
                            <div className="col-sm-12 col-lg-11 packageDetail d-flex align-items-center shadow ">
                                <Tab.Content>
                                    <Tab.Pane eventKey="basic">
                                        <div className="packageWrap container-fluid g-0">
                                            <div className="row g-0">
                                                <div className="col-6 priceWrap">
                                                    <div className={`planSet ${hourly}`}>
                                                        <a href="javascript:void(0);" onClick={handleRevert}  className={'btn'}>hourly</a>
                                                        <a href="javascript:void(0);" onClick={handleUpdate} className={'btn'}>Monthly</a>
                                                    </div>                                                    
                                                    <h3 className="mb-1">Basic</h3>
                                                    <p>Affordable and reliable WordPress support and maintenance.</p>
                                                    <div className="mt-4">
                                                        <h2>
                                                            <span className={`hourly`} dangerouslySetInnerHTML={{ __html: basic }}></span>
                                                        </h2>
                                                        <div className="btnArea mt-3">
                                                            <a href="#" className="btn btn-primary">Contact Us</a>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div className="col-6 planWrap">
                                                    <p>Basic plans includes:</p>
                                                    <ul>
                                                        <li><FaCheckCircle />Security and Backups</li>                                                        
                                                        <li><FaCheckCircle />Plugin and Theme Updates</li>
                                                        <li><FaCheckCircle />Single Website Content Edits</li>
                                                        <li><FaCheckCircle />Speed Assessment</li>                                                        
                                                        <li className="disabled"><FaRegTimesCircle />Emergency Support</li>
                                                        <li className="disabled"><FaRegTimesCircle />Mobile Responsiveness</li>
                                                        <li className="disabled"><FaRegTimesCircle />Malware Cleanup</li>
                                                        <li className="disabled"><FaRegTimesCircle />Database Tuning</li>
                                                        <li className="disabled"><FaRegTimesCircle />SEO Assistance</li>
                                                        <li className="disabled"><FaRegTimesCircle />Domain Transfer</li>
                                                        <li className="disabled"><FaRegTimesCircle />Hosting Migration</li>
                                                        <li className="disabled"><FaRegTimesCircle />Continuous Uptime Monitoring</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="business">
                                        <div className="packageWrap container-fluid g-0">
                                            <div className="row g-0">
                                                <div className="col-6 priceWrap">
                                                     <div className={`planSet ${hourly}`}>
                                                        <a href="javascript:void(0);" onClick={handleRevert}  className={'btn'}>hourly</a>
                                                        <a href="javascript:void(0);" onClick={handleUpdate} className={'btn'}>Monthly</a>
                                                    </div> 
                                                    <h3 className="mb-1">Business</h3>
                                                    <p>Affordable and reliable WordPress support and maintenance.</p>
                                                    <div className="mt-4">
                                                        <h2>
                                                            <span className={`hourly`} dangerouslySetInnerHTML={{ __html: business }}></span>
                                                        </h2>
                                                        <div className="btnArea mt-3">
                                                            <a href="#" className="btn btn-primary">Contact Us</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 planWrap">
                                                    <p>Basic plans includes:</p>
                                                    <ul>
                                                        <li><FaCheckCircle />Security and Backups</li>                                                        
                                                        <li><FaCheckCircle />Plugin and Theme Updates</li>
                                                        <li><FaCheckCircle />3 Websites Content Edits</li>
                                                        <li><FaCheckCircle />Speed Assessment</li>                                                        
                                                        <li ><FaCheckCircle />Emergency Support</li>
                                                        <li ><FaCheckCircle />Mobile Responsiveness</li>
                                                        <li className="disabled"><FaRegTimesCircle />Malware Cleanup</li>
                                                        <li className="disabled"><FaRegTimesCircle />Database Tuning</li>
                                                        <li className="disabled"><FaRegTimesCircle />SEO Assistance</li>
                                                        <li className="disabled"><FaRegTimesCircle />Domain Transfer</li>
                                                        <li className="disabled"><FaRegTimesCircle />Hosting Migration</li>
                                                        <li className="disabled"><FaRegTimesCircle />Continuous Uptime Monitoring</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="premium">
                                        <div className="packageWrap container-fluid g-0">
                                            <div className="row g-0">
                                                <div className="col-6 priceWrap">
                                                    <div className={`planSet ${hourly}`}>
                                                        <a href="javascript:void(0);" onClick={handleRevert}  className={'btn'}>hourly</a>
                                                        <a href="javascript:void(0);" onClick={handleUpdate} className={'btn'}>Monthly</a>
                                                    </div> 
                                                    <h3 className="mb-1">Premium</h3>
                                                    <p>Affordable and reliable WordPress support and maintenance.</p>
                                                    <div className="mt-4">
                                                        <h2>
                                                            <span className={`hourly`} dangerouslySetInnerHTML={{ __html: premium }}></span>
                                                        </h2>
                                                        <div className="btnArea mt-3">
                                                            <a href="#" className="btn btn-primary">Contact Us</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 planWrap">
                                                    <p>Basic plans includes:</p>
                                                    <ul>
                                                        <li><FaCheckCircle />Security and Backups</li>                                                        
                                                        <li><FaCheckCircle />Plugin and Theme Updates</li>
                                                        <li><FaCheckCircle />5 Website Content Edits</li>
                                                        <li><FaCheckCircle />Speed Assessment</li>                                                        
                                                        <li ><FaCheckCircle />Emergency Support</li>
                                                        <li ><FaCheckCircle />Mobile Responsiveness</li>
                                                        <li ><FaCheckCircle />Malware Cleanup</li>
                                                        <li ><FaCheckCircle />Database Tuning</li>
                                                        <li ><FaCheckCircle />SEO Assistance</li>
                                                        <li className="disabled"><FaRegTimesCircle />Domain Transfer</li>
                                                        <li className="disabled"><FaRegTimesCircle />Hosting Migration</li>
                                                        <li className="disabled"><FaRegTimesCircle />Continuous Uptime Monitoring</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="enterprises">
                                        <div className="packageWrap container-fluid g-0">
                                            <div className="row g-0">
                                                <div className="col-6 priceWrap">
                                                    <div className={`planSet ${hourly}`}>
                                                        <a href="javascript:void(0);" onClick={handleRevert}  className={'btn'}>hourly</a>
                                                        <a href="javascript:void(0);" onClick={handleUpdate} className={'btn'}>Monthly</a>
                                                    </div> 
                                                    <h3 className="mb-1">Enterprises</h3>
                                                    <p>Affordable and reliable WordPress support and maintenance.</p>
                                                    <div className="mt-4">
                                                        <h2>
                                                            <span className={`hourly`} dangerouslySetInnerHTML={{ __html: enterises }}></span>
                                                        </h2>
                                                        <div className="btnArea mt-3">
                                                            <a href="#" className="btn btn-primary">Contact Us</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 planWrap">
                                                    <p>Basic plans includes:</p>
                                                    <ul>
                                                        <li><FaCheckCircle />Security and Backups</li>                                                        
                                                        <li><FaCheckCircle />Plugin and Theme Updates</li>
                                                        <li><FaCheckCircle />10 Website Content Edits</li>
                                                        <li><FaCheckCircle />Speed Assessment</li>                                                        
                                                        <li><FaCheckCircle />Emergency Support</li>
                                                        <li><FaCheckCircle />Mobile Responsiveness</li>
                                                        <li><FaCheckCircle />Malware Cleanup</li>
                                                        <li><FaCheckCircle />Database Tuning</li>
                                                        <li><FaCheckCircle />SEO Assistance</li>
                                                        <li><FaCheckCircle />Domain Transfer</li>
                                                        <li><FaCheckCircle />Hosting Migration</li>
                                                        <li><FaCheckCircle />Continuous Uptime Monitoring</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>                                                                    
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                        </div>                      
                    </div>
                </div>
            </section>
               
            <Estimate />            
        </div>
    );
}

export default MaintenanceSupport;