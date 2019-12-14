import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="social-icons wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <ul>
                                    <li className="facebook"><a href="https://www.facebook.com/cabbagetech.co.bd/"><i className="fa fa-facebook" /></a></li>
                                    <li className="twitter"><a href="https://twitter.com/CabbageTech"><i className="fa fa-twitter" /></a></li>
                                </ul>
                            </div>
                            <span>
                                Made with <i className="fa fa-heart pulse" /> in <a>CabbageTech</a>
                            </span>
                            <div className="site-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                <p>All copyrights reserved © 2017 - Powered by <a rel="nofollow" href="#">CabbageTech.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;