import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <section id="aboutUs" className="section team">
                <div className="section-header">
                    <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">About <span>Us</span></h2>
                    <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                </div>
                <div className="container">
                    <div className="row wow fadeInDown p-3 animated" data-wow-duration="1000ms" data-wow-delay="1s">
                        <div className="col-md-3 inline" style={{padding: 5}}>
                            <img src={process.env.PUBLIC_URL + "/images/1.png"} className="img-responsive" alt="Md Mazam Ali Khan"/>
                        </div>
                        <div className="col-md-9 inline">
                            <h1>Md. Mazam Ali Khan</h1>
                            <h2>Founder</h2>
                            <p>Md. Majam Ali Khan is the managing director of Cabbage Tech leads on its Board of Directors, is responsible for Cabbage Tech's day-to-day-operations, as well as lead the company's product &amp; service development and technology strategy. He has been successfully leading a promising team to the global forefront to build up the name of Bangladesh as one of the upcoming countries in the field of Information Technology. Md. Majam Ali Khan was elected as the President of Dhaka Tax Bar for the year of 2015. </p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="section-header">
                            <h2 className="section-title wow fadeIn animated" data-wow-duration="1000ms" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDuration: '1000ms', MozAnimationDuration: '1000ms', animationDuration: '1000ms', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }}>
                                The <span>Team</span>
                            </h2>
                            <hr className="lines wow zoomIn animated" data-wow-delay="0.3s" />
                        </div>
                        <div className="row">   
                            <div className="col-sm-6 profile wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="1s" >
                            <div className="col-md-12">
                                <img src={process.env.PUBLIC_URL + "/images/2.png"} className="img-responsive" alt="Jobair"/>
                            </div>
                            <div className="col-md-12">
                                <h1>M Jobair Khan </h1>
                                <h2>Software Consultant</h2>
                                <p className="minimize">Jobair Khan accumulated regional and international experience exceeding 10 years of proficiency in team management, software development, project planning, ERP, IT service management and his operation<span>... </span><a href="#." className="more">Show More</a><span style={{ display: 'none' }}>al excellence by managing enterprise level project in PMI framework also drives the quality assurance initiatives for the company. His volume of experience, aptitude and adroit decision-making has culminated into several leading executive positions and board memberships. <a href="#." className="less">Show Less</a></span></p>
                            </div>
                        </div>
                            <div className="col-sm-6 profile wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="1s">
                                <div className="col-md-12">
                                    <img src={process.env.PUBLIC_URL + "/images/3.png"} className="img-responsive" alt="Mehedi"/>
                                </div>
                                <div className="col-md-12">
                                    <h1>Mehedi Hassan Khan</h1>
                                    <h2>Project Manager</h2>
                                    <p className="minimize">Mehedi Hassan Khan is Head of Finance, Administration and HR of Cabbage Tech since its foundation. He is responsible for overseeing the overall finance function of Cabbage Tech, driving business growt<span>... </span><a href="." className="more">Show More</a><span style={{ display: 'none' }}>h and profitability and developing corporate strategies. His mission is to continuously build an organization that provides industry best IT Professionals, broad range of technology services and flexible delivery models to the global software development industry so that they get more out of their IT Investments and with greater speed.  <a href="#." className="less">Show Less</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;