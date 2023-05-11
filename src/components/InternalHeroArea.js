import React from 'react';
    function InternalHeroArea(props){         
        return(
            <>
                <section id={props.id} className={`herArea container-fluid px-0 d-flex align-items-center position-relative ${props.className}`}>
                    <div className="container position-relative">
                        <div className="row g-0 justify-content-center align-items-center text-center">
                            <div className={`text-light ${props.colWidth}`}>
                                {props.smallTagLine  && (					
                                    <div className="smallTagLine">{ props.smallTagLine }</div>
                                )}                              
                                <h2 className="text-light">{ props.bannerTitle}</h2>
                                <p className="text-light mt-3">{props.bannerDescription}</p>
                                
                                {props.btnText  && (					
                                    <div className="btnArea mt-4">
                                        <a href={props.btnLink}     className="btn btn-light">{ props.btnText }</a>
                                    </div> 
                                )}                                                       
                            </div>                       
                        </div>
                    </div>
                </section>   
            </>
        );
    }
export default InternalHeroArea;