import React, { Component } from 'react';


class Technologies extends Component {
  render() {
    return (
      <section id="features" className="section" data-stellar-background-ratio="0.2" style={{ backgroundPosition: '0% 212px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeIn animated" data-wow-duration="1000ms" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDuration: '1000ms', MozAnimationDuration: '1000ms', animationDuration: '1000ms', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }}>Technology <span>We Use</span></h2>
            <hr className="lines wow zoomIn animated" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }} />
            <p className="section-subtitle wow fadeIn animated" data-wow-duration="1000ms" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDuration: '1000ms', MozAnimationDuration: '1000ms', animationDuration: '1000ms', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }}>We possess strong skill matrix in top notch technologies that are required in the production and maintenance <br /> of apps, websites &amp; customised software,thus helping the business of our clients to grow. </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="content-left text-right wow fadeInLeft animated animated" data-wow-offset={10} style={{ visibility: 'visible' }}>
                <div className="box-item left">
                  <span className="icon">
                    <a href="https://www.asp.net/core/overview/aspnet-vnext">
                      <img src={process.env.PUBLIC_URL + "/images/asp.net.png"} style={{ position: 'relative', top: '8px' }} />
                    </a>
                  </span>
                  <div className="text">
                    <a href="https://www.asp.net/core/overview/aspnet-vnext"><h4>ASP.NET Core</h4></a>
                    <p>ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based applications.</p>
                  </div>
                </div>
                <div className="box-item left">
                  <span className="icon">
                    <a href="https://groups.google.com/forum/?hl=en#!forum/dddcqrs">
                      <i className="lnr lnr-database" />
                    </a>
                  </span>
                  <div className="text">
                    <a href="https://groups.google.com/forum/?hl=en#!forum/dddcqrs"><h4>CQRS, ES and DDD</h4></a>
                    <p>
                      These are the design approaches to provide data guarantee, quick response to the user and scalability.
                    </p>
                  </div>
                </div>
                <div className="box-item left">
                  <span className="icon">
                    <a href="https://www.w3schools.com/html/">
                      <i className="lnr lnr-code" />
                    </a>
                  </span>
                  <div className="text">
                    <a href="https://www.w3schools.com/html/"><h4>HTML5 &amp; CSS3</h4></a>
                    <p>
                      HTML &amp; CSS combined used for creating and describing the presentation of web pages and web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="show-box wow fadeInDown animated animated" data-wow-offset={10} style={{ visibility: 'visible' }}>
                <img src={process.env.PUBLIC_URL + "/images/features/feature2.png"} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="content-right text-left wow fadeInRight animated animated" data-wow-offset={10} style={{ visibility: 'visible' }}>
                <div className="box-item right">
                  <span className="icon">
                    <a href="http://getbootstrap.com/" style={{ position: 'relative', top: '10px', left: '11px' }}>
                      <svg className="d-block" width={36} height={36} viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="#563d7c" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z" /><path fill="#563d7c" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z" /></svg>
                    </a>
                  </span>
                  <div className="text">
                    <a href="http://getbootstrap.com/"><h4>Bootstrap</h4></a>
                    <p>Bootstrap is an open-source front-end web framework for designing responsive websites and web applications. </p>
                  </div>
                </div>
                <div className="box-item right">
                  <span className="icon">
                    <a href="https://www.javascript.com/">
                      <img src={process.env.PUBLIC_URL + "/images/js.svg"} style={{ position: 'relative', top: '10px' }} />
                    </a>
                  </span>
                  <div className="text">
                    <a href="https://www.javascript.com/"><h4>Javascript</h4></a>
                    <p>JavaScript is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language.</p>
                  </div>
                </div>
                <div className="box-item right">
                  <span className="icon">
                    <a href="https://en.wikipedia.org/wiki/Parallax">
                      <i className="lnr lnr-magic-wand" />
                    </a>
                  </span>
                  <div className="text">
                    <a href="https://en.wikipedia.org/wiki/Parallax"> <h4>Parallax Design</h4></a>
                    <p>Parallax scrolling, also known as "Asymmetrical scrolling", is a technique in computer graphics and web design.</p>
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

export default Technologies;