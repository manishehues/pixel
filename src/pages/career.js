import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import InternalHeroArea from '../components/InternalHeroArea';
import Estimate from '../components/estimate';


function Career(){
    return(
        <div id="main" className="mainWrap container-fluid g-0">
            <InternalHeroArea
                idName="careers"
                className="careersBanner internalMain"
                colWidth="col-md-10 col-lg-6"
                smallTagLine="Career"
                bannerTitle="Find your next opportunity with us." 
                bannerDescription="We actively seek out individuals who are masters of their craft to join our team."                           
                btnLink="https://forms.gle/6WF3iCV9oYFZiLFP7"
                btnText="Send Your Resume"
            />            
            <section id="vacancies" className="section vacancies container-fluid g-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center openVacancies">
                            <h3>Positions Open in <span style={{color:"var(--accentColor)"}}>2023</span></h3>
                            <Tab.Container id="openings" defaultActiveKey="designers">
                                <div className="vacancyCat d-inline">
                                    <Nav variant="pills" className="flex-div sameWidth umn px-5">
                                        <Nav.Item>
                                            <Nav.Link eventKey="designers">
                                                Designers
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="roles">
                                                Functional Roles
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="developers">
                                                Developers    
                                            </Nav.Link>
                                        </Nav.Item>                                                                            
                                    </Nav>

                                    <Tab.Content className="sameWidth">
                                        <Tab.Pane eventKey="designers">
                                            <div className="noVacancy">
                                                <h2>Sorry!</h2>
                                                <p>Currently, no vacancies are available.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="developers">
                                            <div className="noVacancy">
                                                <h2>Sorry!</h2>
                                                <p>Currently, no vacancies are available.</p>
                                            </div>
                                        </Tab.Pane> 
                                        <Tab.Pane eventKey="roles">
                                            <div className="noVacancy">
                                                <h2>Sorry!</h2>
                                                <p>Currently, no vacancies are available.</p>
                                            </div>
                                        </Tab.Pane>                                                                       
                                    </Tab.Content>
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

export default Career;