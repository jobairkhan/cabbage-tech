import React, { Component } from "react";

class ContactUs extends Component {
    render() {
        return (

            <section id="contact" className="section">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-9 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">
                            <div className="contact-block">
                                <div className="section-header">
                                    <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Contact <span>Us</span></h2>
                                    <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                                </div>
                                <form asp-controller="Home" asp-action="SendMessage" method="post" encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Subject" id="msg_subject" name="subject" className="form-control" required data-error="Please enter your subject" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Your Message" name="message" rows={11} data-error="Write your message" required defaultValue={""} />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden" />
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;