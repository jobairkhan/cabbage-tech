import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/line-icons.css';
import './css/menu-sideslide.css';
import './css/index.css';
import './css/responsive.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import Services from './components/services'
import Technologies from './components/technologies'
import AboutUs from './components/about-us'
import Projects from './components/projects'
// import Blog from './components/blog'
import PricingPlans from './components/pricing-plans'
import ContactUs from './components/contact-us'
import Footer from './components/footer'
import FindUs from './components/find-us';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header></Header>
				<div id="colorlib-page">
					<div id="container-wrap">
						<Sidebar></Sidebar>
						<div id="colorlib-main">
							<Services></Services>
							<Technologies></Technologies>
							<Projects></Projects>
							<PricingPlans></PricingPlans> 
							<AboutUs></AboutUs>														
							<FindUs></FindUs>
							<ContactUs></ContactUs>
							<Footer></Footer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));