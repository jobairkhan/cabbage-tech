import React, { Component } from 'react';

class PricingPlans extends Component {
    render() {
        return (
            <div id="pricing" className="section pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Pricing <span>Plans</span></h2>
                        <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                        <p className="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Our vision to develop system will be loosely coupled and high cohesive, easy to integrate with any third-party tools.<br />If the system needs to tell inventory information to others or retrieve the information from another system, cabbage will be delighted to do that.</p>
                    </div>
                    <div className="row pricing-tables">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table table-left wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <div className="icon">
                                    <i className="lnr lnr-rocket" />
                                </div>
                                <div className="pricing-details">
                                    <h2>Classic</h2>
                                    <ul>
                                        <li>3 Installments</li>
                                        <li>4 months support free</li>
                                        <li><small>Negotiable</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <div className="icon">
                                    <i className="lnr lnr-heart" />
                                </div>
                                <div className="pricing-details">
                                    <h2>Silver</h2>
                                    <ul>
                                        <li>No initial payment</li>
                                        <li>Monthly payment</li>
                                        <li>Free 40 hours support per month</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing-table table-left wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <div className="icon">
                                    <i className="lnr lnr-magic-wand" />
                                </div>
                                <div className="pricing-details">
                                    <h2>Gold</h2>
                                    <ul>
                                        <li>Initial lump sum payment</li>
                                        <li>Per transaction charge</li>
                                        <li>No support cost</li>
                                        <li><small>Only for Cloud based app</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingPlans;