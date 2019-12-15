import React, { Component } from "react";

export default class FindUs extends Component {
    render() {
        return (
            <section id="FindUs">
                <div className="google-maps section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-9 wow fadeInUpBig" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <div className="contact-block">
                                    <div className="section-header">
                                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Find <span>Us</span></h2>
                                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                                    </div>
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe width="100%" height={400} id="gmap_canvas" title="Google map"
                                                src="https://maps.google.com/maps?q=40 bijoynagar paltan dhaka, &t=&z=17&ie=UTF8&iwloc=&output=embed" 
                                                frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                                            <br />embed google map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}