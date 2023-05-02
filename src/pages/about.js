import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Estimate from '../components/estimate';


function About(){
    return(
        <div id="main" className="mainWrap container-fluid g-0">
            <section id="aboutHeroArea" className="herArea container-fluid internalMain aboutBanner clientsReviews d-flex align-items-center">
                <div className="container">
                    <div className="row g-0 align-items-center ">
                        <div className="col-md-6 pe-5 text-light leftSide">
                            <h3>Our team not only possesses expert knowledge in their respective fields, but they are also deeply committed to providing the best possible service to our clients. We firmly believe that quality should always take precedence over quantity.</h3>                            
                        </div>
                        <div className="col-md-6 rightSide ps-5 clientDetails position-relative">
                            <div className="clientName shadow card position-absolute end-0 top-50 border-0 p-3">
                                <div className="card-body p-1">
                                    <div className="ownerDetails"> <strong>Rum Tan </strong>Co-Founder of Smile Tutor</div>                                    
                                </div>
                            </div>
                            <img src="assets/images/rumTan.jpg" alt="" />
                            <div className="card position-absolute end-0 border-0 shadow p-3 quote">
                                <div className="card-body">
                                    <p className="mb-0"><img src="assets/images/left-quote.svg" alt="Left Quote" /> Ehues' team created an exceptional WordPress site, with prompt feedback and outstanding commitment to quality and client satisfaction. Highly recommend for reliable and talented development services."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="biosSection" className="container-fluid section bios aboutPage">
                <div className="container-lg">
                    <div className="row text-center g-0 justify-content-center">
                        <div className="col-md-11">
                            <h3 className="mb-3">Why choose eHues?</h3>
                            <p className="px-5 mt-2">At pixel, we pride ourselves on being a team of experts who are committed to meeting the unique needs of our clients. With our wealth of experience, talent, and creativity, we're able to deliver "out of the box" results that will help boost your business to new heights.</p>
                            <p>Our team is entirely focused on achieving customer satisfaction by providing exceptional web design services in Canada. We understand that every project is unique, and we work closely with our clients to deliver new and innovative ideas that help them achieve their goals. Your project is our top priority, and we'll do whatever it takes to meet your requirements, no matter how big or small your company is.</p>
                            <p>Our services cover the entire range of online solutions, including website designing, graphics designing, web development, logo designing, banner designing, and mobile app development. We're based in Fredericton, but we serve clients all over Canada. We believe in building exceptional relationships with our clients by delivering remarkable results, increasing sales, and improving the rate of return.</p>
                            <p>We closely monitor the latest trends and technologies to ensure that we're always delivering the best possible results. Our team is dedicated to providing high-quality service at affordable rates, and we're committed to helping our clients achieve their vision. So if you're looking for a web solutions provider who can deliver exceptional results and outstanding customer service, Ehues Web Solutions is the perfect choice for you.</p>
                        </div>
                    </div>                    
                </div>
            </section>
            <section id="allServices" className="container-fluid serInDetails">               
                <div className="container">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="branding">
                        <div className="row g-0">
                            <div className="col-sm-5 serTitles">
                                <Nav variant="pills" className="flex-divumn">
                                    <Nav.Item>
                                        <Nav.Link eventKey="branding">
                                            <div className="circleWrap">
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M62.593 38.036C62.0265 38.036 61.5674 37.577 61.5674 37.0105C61.5674 28.14 56.07 11.3628 35.2621 11.3628C15.6979 11.3628 8.59535 26.6179 8.59535 36.8721C8.59535 37.4386 8.13628 37.8977 7.56977 37.8977C7.00326 37.8977 6.54419 37.4386 6.54419 36.8721C6.54419 30.4549 9.01535 23.6958 13.1519 18.7925C16.8016 14.4672 23.5998 9.31161 35.2621 9.31161C44.66 9.31161 52.3144 12.657 57.4 18.9846C61.3526 23.9025 63.6186 30.4728 63.6186 37.0105C63.6186 37.577 63.1595 38.036 62.593 38.036Z" fill="#254EDB"/>
                                                    <path d="M10.0116 34.6744H5.04651V39.6395H10.0116V34.6744Z" fill="#254EDB"/>
                                                    <path d="M10.0117 40.6163H5.04657C4.50773 40.6163 4.06982 40.1784 4.06982 39.6395V34.6744C4.06982 34.1356 4.50773 33.6977 5.04657 33.6977H10.0117C10.5505 33.6977 10.9884 34.1356 10.9884 34.6744V39.6395C10.9884 40.1784 10.5505 40.6163 10.0117 40.6163ZM6.02331 38.6628H9.03494V35.6512H6.02331V38.6628Z" fill="#254EDB"/>
                                                    <path d="M64.9535 34.6744H59.9884V39.6395H64.9535V34.6744Z" fill="#254EDB"/>
                                                    <path d="M64.9536 40.6163H59.9885C59.4496 40.6163 59.0117 40.1784 59.0117 39.6395V34.6744C59.0117 34.1356 59.4496 33.6977 59.9885 33.6977H64.9536C65.4924 33.6977 65.9303 34.1356 65.9303 34.6744V39.6395C65.9303 40.1784 65.4924 40.6163 64.9536 40.6163ZM60.9652 38.6628H63.9768V35.6512H60.9652V38.6628Z" fill="#254EDB"/>
                                                    <path d="M37.686 13.8046H32.7209C32.1544 13.8046 31.6954 13.3456 31.6954 12.7791V11.3628H12.6651V11.5174C12.6651 12.0839 12.206 12.543 11.6395 12.543H9.11628C8.54977 12.543 8.0907 12.0839 8.0907 11.5174V8.99417C8.0907 8.42766 8.54977 7.96859 9.11628 7.96859H11.6395C12.206 7.96859 12.6651 8.42766 12.6651 8.99417V9.31162H31.6954V7.81394C31.6954 7.24743 32.1544 6.78836 32.7209 6.78836H37.686C38.2526 6.78836 38.7116 7.24743 38.7116 7.81394V9.31162H57.7419V8.99417C57.7419 8.42766 58.2009 7.96859 58.7674 7.96859H61.2907C61.8572 7.96859 62.3163 8.42766 62.3163 8.99417V11.5174C62.3163 12.0839 61.8572 12.543 61.2907 12.543H58.7674C58.2009 12.543 57.7419 12.0839 57.7419 11.5174V11.3628H38.7116V12.7791C38.7116 13.3456 38.2526 13.8046 37.686 13.8046ZM33.7465 11.7535H36.6605V11.3628H33.7465V11.7535ZM33.7465 9.31162H36.6605V8.83952H33.7465V9.31162Z" fill="#254EDB"/>
                                                    <path d="M37.6861 7.81393H32.7209V12.7791H37.6861V7.81393Z" fill="#254EDB"/>
                                                    <path d="M41.5116 50.107H28.6512C28.1905 50.107 27.7868 49.8009 27.663 49.3565L24.4886 37.9611C24.4089 37.673 24.4577 37.3637 24.6237 37.1163L34.4726 22.3837C34.6647 22.0972 34.9919 21.9279 35.3337 21.9279C35.6789 21.9311 35.9996 22.107 36.1868 22.3984L45.7914 37.2937C45.9542 37.5477 45.9982 37.8602 45.9103 38.1484L42.4916 49.3809C42.3614 49.8123 41.9626 50.107 41.5116 50.107ZM29.4293 48.0558H40.7514L43.8103 38.0051L36.3512 26.4372V39.3139C36.3512 39.8804 35.8921 40.3395 35.3256 40.3395C34.7591 40.3395 34.3 39.8804 34.3 39.3139V26.333L26.5919 37.8651L29.4293 48.0558Z" fill="#254EDB"/>
                                                    <path d="M35.2849 41.2349C34.2935 41.2349 33.4861 40.4274 33.4861 39.436C33.4861 38.4446 34.2935 37.6372 35.2849 37.6372C36.2763 37.6372 37.0838 38.4446 37.0838 39.436C37.0838 40.4274 36.2763 41.2349 35.2849 41.2349ZM35.2849 39.1837C35.1465 39.1837 35.0326 39.2977 35.0326 39.436C35.0326 39.5744 35.1465 39.6884 35.2849 39.6884C35.4233 39.6884 35.5372 39.5744 35.5372 39.436C35.5372 39.2977 35.4233 39.1837 35.2849 39.1837Z" fill="#254EDB"/>
                                                    <path d="M42.8955 54.9907H26.942C26.3755 54.9907 25.9164 54.5316 25.9164 53.9651V49C25.9164 48.4335 26.3755 47.9744 26.942 47.9744H42.8955C43.462 47.9744 43.921 48.4335 43.921 49V53.9651C43.921 54.5316 43.462 54.9907 42.8955 54.9907ZM27.9675 52.9395H41.8699V50.0256H27.9675V52.9395Z" fill="#254EDB"/>
                                                    <path d="M41.7558 63.2116H28.5698C28.0033 63.2116 27.5442 62.7525 27.5442 62.186V53.9651C27.5442 53.3986 28.0033 52.9395 28.5698 52.9395H41.7558C42.3223 52.9395 42.7814 53.3986 42.7814 53.9651V62.186C42.7814 62.7525 42.3223 63.2116 41.7558 63.2116ZM29.5954 61.1604H40.7302V54.9907H29.5954V61.1604Z" fill="#254EDB"/>
                                                </svg>
                                                Branding
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="wordpress">
                                            <div className="circleWrap">
                                                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_189_5)">
                                                    <path d="M4.62061 32.4974C4.62061 43.5314 11.0341 53.0695 20.3335 57.5892L7.0343 21.1504C5.48529 24.6197 4.62061 28.4551 4.62061 32.4974Z" fill="#254EDB"/>
                                                    <path d="M51.3191 31.0917C51.3191 27.6488 50.0831 25.2617 49.0221 23.405C47.611 21.108 46.2848 19.1664 46.2848 16.8694C46.2848 14.3072 48.2264 11.92 50.9637 11.92C51.0857 11.92 51.2024 11.936 51.3244 11.9413C46.3644 7.39503 39.7546 4.62061 32.4976 4.62061C22.7579 4.62061 14.1906 9.61775 9.2041 17.1877C9.85659 17.209 10.4773 17.2196 10.9971 17.2196C13.9148 17.2196 18.4292 16.8641 18.4292 16.8641C19.9305 16.774 20.1108 18.9808 18.6096 19.1611C18.6096 19.1611 17.0977 19.3362 15.4214 19.4264L25.5748 49.6214L31.6753 31.3251L27.3307 19.4264C25.8294 19.3362 24.4077 19.1611 24.4077 19.1611C22.9065 19.0709 23.0815 16.774 24.5828 16.8641C24.5828 16.8641 29.1874 17.2196 31.9247 17.2196C34.8423 17.2196 39.3567 16.8641 39.3567 16.8641C40.858 16.774 41.0383 18.9808 39.5371 19.1611C39.5371 19.1611 38.0252 19.3362 36.3489 19.4264L46.4227 49.3933L49.2025 40.0993C50.4067 36.2427 51.3244 33.4735 51.3244 31.0864L51.3191 31.0917Z" fill="#254EDB"/>
                                                    <path d="M32.9853 34.9375L24.6196 59.2442C27.1182 59.9763 29.76 60.3794 32.4973 60.3794C35.7438 60.3794 38.8578 59.8171 41.7542 58.7986C41.6799 58.6819 41.611 58.5546 41.5579 58.4167L32.9853 34.9375Z" fill="#254EDB"/>
                                                    <path d="M56.9632 19.124C57.0852 20.0099 57.1489 20.9647 57.1489 21.9886C57.1489 24.816 56.6184 27.9989 55.0269 31.9722L46.5127 56.5919C54.7988 51.7592 60.3742 42.7782 60.3742 32.4921C60.3742 27.6435 59.1382 23.0867 56.9579 19.1187L56.9632 19.124Z" fill="#254EDB"/>
                                                    <path d="M32.4973 0C14.5777 0 0 14.5777 0 32.4973C0 50.417 14.5777 64.9947 32.4973 64.9947C50.417 64.9947 64.9947 50.417 64.9947 32.4973C65 14.5777 50.417 0 32.4973 0ZM32.4973 63.504C15.3999 63.504 1.49066 49.5948 1.49066 32.492C1.49066 15.3893 15.3999 1.49066 32.4973 1.49066C49.5948 1.49066 63.504 15.3999 63.504 32.4973C63.504 49.5948 49.5948 63.5093 32.4973 63.5093V63.504Z" fill="#254EDB"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_189_5">
                                                    <rect width="65" height="64.9947" fill="#254EDB"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                                Wordpress
                                            </div>    
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="technologies">
                                            <div className="circleWrap">
                                                <svg width="65" height="30" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5659 29.3129C16.2443 29.3129 15.9226 29.198 15.6698 28.9682L0.482502 15.7109C0.160834 15.4582 0 15.0905 0 14.677C0 14.2864 0.160834 13.8958 0.482502 13.643L15.6698 0.385692C16.2443 -0.119787 17.1174 -0.0508564 17.6228 0.523551C18.1283 1.09796 18.0594 1.97106 17.485 2.47654L3.46942 14.677L17.462 26.9004C18.0364 27.4058 18.1053 28.2789 17.5999 28.8533C17.3471 29.152 16.9565 29.3129 16.5659 29.3129Z" fill="#254EDB"/>
                                                    <path d="M48.4111 29.3129C48.0205 29.3129 47.6529 29.152 47.3772 28.8304C46.8717 28.256 46.9407 27.3829 47.5151 26.8774L61.5076 14.654L47.5151 2.43058C46.9407 1.9251 46.8717 1.052 47.3772 0.47759C47.8827 -0.0968178 48.7558 -0.165745 49.3302 0.339734L64.5175 13.5971C64.8162 13.8498 65 14.2404 65 14.631C65 15.0216 64.8392 15.4122 64.5175 15.6649L49.3302 28.9912C49.0545 29.221 48.7328 29.3129 48.4111 29.3129Z" fill="#254EDB"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4659 14.9756C18.4659 13.7067 19.4946 12.678 20.7636 12.678H20.8141C22.0831 12.678 23.1118 13.7067 23.1118 14.9756C23.1118 16.2446 22.0831 17.2733 20.8141 17.2733H20.7636C19.4946 17.2733 18.4659 16.2446 18.4659 14.9756Z" fill="#254EDB"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1426 14.9756C30.1426 13.7067 31.1712 12.678 32.4402 12.678H32.4908C33.7597 12.678 34.7884 13.7067 34.7884 14.9756C34.7884 16.2446 33.7597 17.2733 32.4908 17.2733H32.4402C31.1712 17.2733 30.1426 16.2446 30.1426 14.9756Z" fill="#254EDB"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8191 14.9756C41.8191 13.7067 42.8477 12.678 44.1167 12.678H44.1673C45.4363 12.678 46.4649 13.7067 46.4649 14.9756C46.4649 16.2446 45.4363 17.2733 44.1673 17.2733H44.1167C42.8477 17.2733 41.8191 16.2446 41.8191 14.9756Z" fill="#254EDB"/>
                                                </svg>
                                                Technologies
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="design">
                                            <div className="circleWrap">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M38.9307 45.0776C38.5045 45.0776 38.0997 44.8208 37.9339 44.3981C37.7181 43.8489 37.9874 43.2265 38.5384 43.0108L44.491 40.6711C45.042 40.4553 45.6626 40.7264 45.8784 41.2756C46.0942 41.8249 45.8249 42.4472 45.2738 42.663L39.3213 45.0027C39.1947 45.0526 39.0609 45.0776 38.9307 45.0776Z" fill="#254EDB"/>
                                                    <path d="M10.5534 52.4478C10.4232 52.4478 10.2912 52.4246 10.1628 52.3729C9.61359 52.1572 9.34253 51.5366 9.55831 50.9855L21.5045 20.5807C21.7202 20.0315 22.3408 19.7604 22.8918 19.9762C23.4411 20.192 23.7121 20.8126 23.4964 21.3636L11.5502 51.7684C11.3826 52.1893 10.9796 52.4478 10.5534 52.4478Z" fill="#254EDB"/>
                                                    <path d="M16.506 54.7857C16.3758 54.7857 16.2439 54.7625 16.1155 54.7108C15.5662 54.495 15.2952 53.8744 15.5109 53.3234L28.3773 20.5789C28.593 20.0297 29.2136 19.7586 29.7646 19.9744C30.3139 20.1902 30.5849 20.8108 30.3692 21.3618L17.5029 54.1063C17.337 54.5289 16.9322 54.7857 16.506 54.7857Z" fill="#254EDB"/>
                                                    <path d="M48.6941 52.446C48.2661 52.446 47.8631 52.1893 47.6973 51.7666L35.7493 21.3636C35.5336 20.8144 35.8046 20.192 36.3539 19.9762C36.9031 19.7604 37.5255 20.0315 37.7413 20.5807L49.6892 50.9838C49.905 51.533 49.6339 52.1554 49.0847 52.3712C48.958 52.4211 48.8243 52.446 48.6941 52.446Z" fill="#254EDB"/>
                                                    <path d="M42.7415 54.7857C42.3135 54.7857 41.9105 54.5289 41.7446 54.1063L28.8765 21.3618C28.6608 20.8126 28.9318 20.1902 29.4811 19.9744C30.0303 19.7586 30.6527 20.0297 30.8685 20.5789L43.7366 53.3234C43.9523 53.8727 43.6813 54.495 43.132 54.7108C43.0036 54.7625 42.8717 54.7857 42.7415 54.7857Z" fill="#254EDB"/>
                                                    <path d="M36.748 22.0412H22.4996C21.9093 22.0412 21.4279 21.5615 21.4279 20.9713V12.178C21.4279 8.04967 24.7858 4.69177 28.914 4.69177H30.3317C34.46 4.69177 37.8179 8.04967 37.8179 12.178V20.9713C37.8179 21.5633 37.3382 22.0412 36.748 22.0412ZM23.5678 19.9013H35.678V12.178C35.678 9.2302 33.2795 6.8317 30.3317 6.8317H28.914C25.9663 6.8317 23.5678 9.2302 23.5678 12.178V19.9013Z" fill="#254EDB"/>
                                                    <path d="M29.6237 6.83172C29.0334 6.83172 28.5537 6.35202 28.5537 5.76175V1.06996C28.5537 0.4797 29.0334 0 29.6237 0C30.2139 0 30.6936 0.4797 30.6936 1.06996V5.76175C30.6936 6.35202 30.2139 6.83172 29.6237 6.83172Z" fill="#254EDB"/>
                                                    <path d="M44.8797 42.7379C44.4517 42.7379 44.0486 42.4794 43.8828 42.0585C43.667 41.5093 43.9381 40.8869 44.4891 40.6711L45.4699 40.2877C46.4668 39.8954 47.1123 38.9503 47.1123 37.8785C47.1123 37.5557 47.0517 37.2383 46.9304 36.9334C46.6772 36.2878 46.1886 35.7814 45.5555 35.505C44.9225 35.2286 44.2181 35.2161 43.5743 35.4675L42.5935 35.8527C42.0425 36.0685 41.4219 35.7974 41.2061 35.2464C40.9903 34.6954 41.2614 34.0748 41.8124 33.859L42.7932 33.4756C43.9666 33.0137 45.2524 33.0369 46.4097 33.5416C47.5688 34.0463 48.4605 34.9718 48.9223 36.1487C49.1417 36.7033 49.2522 37.2865 49.2522 37.8785C49.2522 39.8365 48.0753 41.5628 46.2528 42.2796L45.272 42.6648C45.14 42.713 45.008 42.7379 44.8797 42.7379Z" fill="#254EDB"/>
                                                    <path d="M42.7415 54.7857C42.3153 54.7857 41.9105 54.5289 41.7447 54.1063C41.5289 53.557 41.7982 52.9347 42.3492 52.7189L48.3018 50.3792C48.8528 50.1635 49.4734 50.4345 49.6892 50.9838C49.9049 51.533 49.6357 52.1554 49.0846 52.3711L43.1321 54.7108C43.0037 54.7625 42.8717 54.7857 42.7415 54.7857Z" fill="#254EDB"/>
                                                    <path d="M16.5059 54.7857C16.3758 54.7857 16.2438 54.7626 16.1154 54.7108L10.1628 52.373C9.61359 52.1572 9.34253 51.5366 9.55831 50.9856C9.77408 50.4363 10.3964 50.1653 10.9457 50.3811L16.8983 52.7189C17.4475 52.9347 17.7186 53.5553 17.5028 54.1063C17.3369 54.529 16.9321 54.7857 16.5059 54.7857Z" fill="#254EDB"/>
                                                    <path d="M10.9759 60C10.844 60 10.7085 59.975 10.5783 59.9233C10.029 59.7039 9.76332 59.0816 9.98266 58.5323L12.5363 52.1482C12.7557 51.599 13.378 51.3333 13.9273 51.5526C14.4765 51.772 14.7422 52.3943 14.5229 52.9436L11.9692 59.3277C11.8016 59.745 11.4004 60 10.9759 60Z" fill="#254EDB"/>
                                                    <path d="M48.2716 60C47.8471 60 47.4459 59.745 47.2783 59.3277L44.7246 52.9436C44.5053 52.3944 44.7728 51.772 45.3202 51.5527C45.8695 51.3333 46.4918 51.6008 46.7112 52.1483L49.2648 58.5324C49.4842 59.0816 49.2167 59.704 48.6692 59.9233C48.539 59.9751 48.4035 60 48.2716 60Z" fill="#254EDB"/>
                                                    <path d="M29.6861 16.6201H29.5612C28.675 16.6201 27.9563 15.9014 27.9563 15.0152C27.9563 14.1289 28.675 13.4102 29.5612 13.4102H29.6861C30.5724 13.4102 31.291 14.1289 31.291 15.0152C31.291 15.9014 30.5724 16.6201 29.6861 16.6201Z" fill="#254EDB"/>
                                                    <path d="M58.1775 60H1.06996C0.4797 60 0 59.5203 0 58.93C0 58.3398 0.4797 57.8601 1.06996 57.8601H58.1775C58.7678 57.8601 59.2475 58.3398 59.2475 58.93C59.2475 59.5203 58.7678 60 58.1775 60Z" fill="#254EDB"/>
                                                </svg>
                                                Design
                                            </div>    
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="col-sm-7 serDetails d-flex align-items-center px-5">
                                <Tab.Content>
                                    <Tab.Pane eventKey="branding">
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Logo Design</h4>
                                            <p className="text-light opacity-50">Creating a unique and recognizable logo that represents the brand.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Branding Collateral Design</h4>
                                            <p className="text-light opacity-50">Designing various branding collateral such as business cards, letterheads, envelopes, brochures, flyers, banners, and other marketing materials.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Social Media Graphics</h4>
                                            <p className="text-light opacity-50">Designing graphics for various social media platforms that align with the brand's visual identity and support its messaging.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Packaging Design</h4>
                                            <p className="text-light opacity-50">Creating a visually appealing and on-brand packaging design for products.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Advertising Design</h4>
                                            <p className="text-light opacity-50">Designing ads that promote the brand and its products/services across various media channels such as print, outdoor, and online.</p>
                                        </div>                                                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="wordpress">
                                    <div className="snglServices">
                                            <h4 className="serTitle text-light">Blog</h4>
                                            <p className="text-light opacity-50">WordPress was originally created as a blogging platform, so it's no surprise that it's still a popular choice for bloggers.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Business</h4>
                                            <p className="text-light opacity-50">WordPress can be used to create a website for any type of business, from small startups to large corporations.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">E-commerce</h4>
                                            <p className="text-light opacity-50">With the help of plugins like WooCommerce, you can turn your WordPress website into an online store and sell products.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Portfolio </h4>
                                            <p className="text-light opacity-50">WordPress can be used to showcase your work if you're a photographer, artist, or designer.</p>
                                        </div>                                       
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Educational website</h4>
                                            <p className="text-light opacity-50">WordPress can be used to create online courses and educational resources.</p>
                                        </div>                                        
                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="technologies">
                                    <div className="snglServices">
                                            <h4 className="serTitle text-light">React Js</h4>
                                            <p className="text-light opacity-50">A JavaScript library for building dynamic user interfaces with reusable UI components.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Angular Js</h4>
                                            <p className="text-light opacity-50">A web application framework for building single-page applications with TypeScript and powerful features.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Laravel </h4>
                                            <p className="text-light opacity-50">A PHP web application framework for building modern and scalable web applications with elegant syntax and MVC architecture.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Shopify</h4>
                                            <p className="text-light opacity-50">A cloud-based e-commerce platform for creating and managing online stores with a wide range of features and integrations.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">WordPress</h4>
                                            <p className="text-light opacity-50">An open-source content management system for building customizable websites and blogs with a large ecosystem of plugins and themes.</p>
                                        </div>                                        
                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="design">
                                    <div className="snglServices">
                                            <h4 className="serTitle text-light">Web Design</h4>
                                            <p className="text-light opacity-50">Designing and creating visually appealing, user-friendly, and accessible websites.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Mobile Applications</h4>
                                            <p className="text-light opacity-50">Developing applications for mobile devices such as smartphones and tablets using mobile-specific technologies and frameworks.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Web Applications</h4>
                                            <p className="text-light opacity-50">Developing software applications that are accessed over the internet through a web browser, using web technologies and frameworks.</p>
                                        </div> 
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">UI/UX Designs</h4>
                                            <p className="text-light opacity-50">Designing user interfaces and experiences that are intuitive, easy to use, and engaging for the user.</p>
                                        </div>
                                        <div className="snglServices">
                                            <h4 className="serTitle text-light">Visual Designs</h4>
                                            <p className="text-light opacity-50">Creating visual designs for digital media such as websites, applications, and marketing materials that are visually appealing and communicate the desired message effectively.</p>
                                        </div>                                         
                                    </Tab.Pane>                                    
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>                   
                </div>
            </section>
            <section id="projectLogos" className="container-fluid section mt-5 pb-0 projectLogos">
                <div className="container-lg">
                    <div className="row g-0 text-center mb-5">
                        <div className="col">
                            <h3>Chosen by Top Organizations</h3>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 border border-top-0 border-start-0 snglProject ut p-3">
                            <a href="https://usetrue.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/true.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-top-0 border-start-0 snglProject ll p-3">
                            <a href="https://littlelionsalon.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/littlelion.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-top-0 border-start-0 snglProject fjs p-3">
                            <a href="http://foxandjanesalon.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/fj.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-top-0 border-start-0 snglProject p-3 rf border-end-0 p-3">
                            <a href="https://renegadefit.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/renegade.svg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="col-3 border snglProject border-top-0 border-start-0 mij p-3 ">
                            <a href="https://maeveinjune.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/maeveinjune.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 sh p-3 ">
                            <a href="https://skin-habit.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/skin-habit.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 yb p-3 ">
                            <a href="https://www.theyogabox.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/yogabox.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 mm  border-end-0 p-3">
                            <a href="https://mellow-massage.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/mellow-massage.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 p-3 sib border-bottom-0">
                            <a href="" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/sib.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 p-3 gs border-bottom-0">
                            <a href="https://ghostscribed.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/ghost.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 p-3 st border-bottom-0">
                            <a href="https://smiletutor.sg/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/sm-tutor.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border snglProject border-top-0 border-start-0 sc border-bottom-0 border-end-0 p-3">
                            <a href="https://scrubsmag.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/scrubs.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-bottom-0 border-start-0 snglProject ob p-3">
                            <a href="https://oblios.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/oblio's.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-bottom-0 border-start-0 snglProject bf p-3">
                            <a href="https://thebetterfuture.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/betterfuture.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-bottom-0 border-start-0 snglProject lvg p-3">
                            <a href="https://lakeviewglamping.ca/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/LVG-round.svg" alt="" />
                                </div>
                            </a>
                        </div> 
                        <div className="col-3 border border-bottom-0 border-start-0 snglProject p-3 ma border-end-0 p-3">
                            <a href="https://themellowacademy.com/" target="_blank" className="card border-0 rounded-2 text-center">
                                <div className="card-body d-flex align-items-center  justify-content-center">
                                    <img src="assets/images/logos/ma.svg" alt="" />
                                </div>
                            </a>
                        </div>                                              
                    </div>
                </div>
            </section>
            <Estimate />            
        </div>
    );
}

export default About;