import React, { Component } from "react";
import FindUs from './find-us';

class ContactUs extends Component {
    render() {
        return (
            <section id="contact" className="section team">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Contact <span>Us</span></h2>
                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                    </div>
                    <div className="wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">
                        <address>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="icon">
                                        <span class="lnr lnr-envelope"></span>&nbsp;
                                            <a href="mailto:webmaster@example.com" >
                                             <strong>support@cabbagetech.co.bd</strong>
                                            </a>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="icon">
                                        <span className="lnr lnr-phone"></span>&nbsp;
                                        <strong>
                                            <a href="tel:+88029342476">+88 02 9342476</a>
                                        </strong>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="icon">
                                        <span class="lnr lnr-smartphone"></span>&nbsp;
                                        <strong><a href="tel:+8801741740074">+88 01741-740074</a></strong>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="icon">
                                        <span class="lnr lnr-apartment"></span>&nbsp;
                                                visit us at:<br />
                                    </div>
                                    <strong> 
                                        <a className="nav-link" href="/#FindUs">
                                        186 Shahid Syed Nazrul Islam Sarani<br />
                                        MCT Ally's Center<br />
                                        Level-10, Suite-2<br />
                                        40 Bijoy Nagar<br />
                                        Dhaka-1000, Bangladesh
                                        </a>
                                    </strong>
                                    </div>
                            </div>
                        </address>
                    </div>
                </div>                														
				<FindUs></FindUs>
            </section>
        );
    }
}

export default ContactUs;