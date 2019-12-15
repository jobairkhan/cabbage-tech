import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            < section id="portfolios" className="section" >
                {/* Container Starts */}
                < div className="container" >
                    <div className="section-header">
                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Our <span>Works</span></h2>
                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                        <p className="section-subtitle wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">To support our clients to acquire the latest in technology, we develop software tailor made to the business needs.<br />  We build software that automates your day to day business process to ensure sustainable growth of your business.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Portfolio Recent Projects */}
                            <div id="portfolio" className="row wow fadeInUp" data-wow-delay="0.8s">
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing planning">
                                    <div className="portfolio-item">
                                        <div className="shot-item">
                                            <a className="overlay " href={process.env.PUBLIC_URL +"/images/portfolio/ooriginuk.png"}>
                                                <img src={process.env.PUBLIC_URL +"/images/portfolio/ooriginuk.png"} alt="" />
                                                <i className="lnr lnr-plus-circle item-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix planning">
                                    <div className="portfolio-item">
                                        <div className="shot-item">
                                            <a className="overlay " href={process.env.PUBLIC_URL +"/images/portfolio/Cabbage.PNG"}>
                                                <img src={process.env.PUBLIC_URL +"/images/portfolio/Cabbage.PNG"} alt="" />
                                                <i className="lnr lnr-plus-circle item-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix research">
                                    <div className="portfolio-item">
                                        <div className="shot-item">
                                            <a className="overlay " href={process.env.PUBLIC_URL +"/images/portfolio/img4.jpg"}>
                                                <img src={process.env.PUBLIC_URL + "/images/portfolio/img4.jpg"} alt="Playmap"/>
                                                <i className="lnr lnr-plus-circle item-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Container Ends */}
            </section >
        );
    }
}

export default Projects;