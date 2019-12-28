import React, { Component } from "react";
import FindUs from './find-us';

class ContactUs extends Component {
    render() {
        return (
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Contact <span>Us</span></h2>
                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                    </div>
                    <div className="wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">
                        <address>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <a href="mailto:webmaster@example.com">
                                        <div className="item-boxes">
                                            <div className="icon">
                                                <i class="lnr lnr-envelope"></i>
                                            </div>
                                            <h4>support@cabbagetech.co.bd</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <a href="tel:+88029342476">
                                        <div className="item-boxes">
                                            <div className="icon">
                                                <i className="lnr lnr-phone"></i>
                                            </div>
                                            <h4>+88 02 9342476</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <a href="tel:+8801741740074">
                                        <div className="item-boxes">
                                            <div className="icon">
                                                <i class="lnr lnr-smartphone"></i>
                                            </div>
                                            <h4>+88 01741-740074</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <a className="nav-link" href="/#find-us">
                                        <div className="item-boxes">
                                            <div className="icon">
                                                <i class="lnr lnr-apartment"></i>
                                            </div>
                                            <div className="text">visit us at </div>

                                            <h4>
                                                186 Shahid Syed Nazrul Islam Sarani<br />
                                                MCT Ally's Center, Level-10, Suite-2<br />
                                                40 Bijoy Nagar, Dhaka-1000<br />
                                                Bangladesh
                                            </h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>
                <FindUs></FindUs>
            </section >
        );
    }
}

export default ContactUs;