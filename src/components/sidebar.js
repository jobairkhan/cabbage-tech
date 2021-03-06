import React, { Component } from 'react';

class Sidebar extends Component {
 
  handleClick = (e) =>{
    e.preventDefault();
    document.body.classList.remove('show-menu');
  }

  render() {
    return (
      <div className="menu-wrap">
        <nav className="menu  navbar-collapse">
          <div className="icon-list ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#portfolios">Our Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#aboutUs">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact Us</a>
              </li>             
            </ul>
          </div>
        </nav>
        <button className="close-button" id="close-button" onClick={this.handleClick}>
          <i className="lnr lnr-cross" />
        </button>
      </div>
    )
  }
}
export default Sidebar;
{/* <li className="nav-item">                
<a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://cabbagetech.blog">Blog</a>                
</li> */}