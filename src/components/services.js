import React, { Component } from 'react';


class Services extends Component {
    render() {
        return (
            <section id="services" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Our <span>Services</span></h2>
                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                        <p className="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">We provide high-quality application for your business or personal use  <br /> using cutting edge technology.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="item-boxes wow fadeInDown" data-wow-delay="0.4s">
                                <div className="icon">
                                    <i className="lnr lnr-tablet" />
                                </div>
                                <h4>System Software</h4>
                                <p>We develop applications using latest services and tools with smooth user experience.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="item-boxes wow fadeInDown" data-wow-delay="0.6s">
                                <div className="icon">
                                    <i className="lnr lnr-screen" />
                                </div>
                                <h4>Software consultancy</h4>
                                <p>We have a wealth of technical and business experience to share with you.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="item-boxes wow fadeInDown" data-wow-delay="1s">
                                <div className="icon">
                                    <i className="lnr lnr-laptop-phone" />
                                </div>
                                <h4>Single Page Application</h4>
                                <p>uses React or Angular to create fluid and responsive Web apps, without constant page reloads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;