import React, { Component } from 'react';


class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        document.body.classList.add('show-menu');
    }

    render() {
        return (
            <div className="fixed-top menu-bg">
                <div className="container">
                    <div className="logo-menu">
                        <a className="logo" title="Cabbage Tech" href="/">
                            <img src="/images/cabbagetech.png" alt="Cabbage" className="img-responsive" />
                            Cabbage Tech
                        </a>
                        <button className="menu-button" id="open-button" onClick={this.handleClick}>
                            <i className="lnr lnr-menu" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default TopMenu;