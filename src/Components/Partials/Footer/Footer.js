import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<ul className="footer-link-group">
					<li className="footer-link"><Link to="/products/all">Our Products</Link></li>
					<li className="footer-link-sub"><Link to="/products/mushrooms">Mushrooms</Link></li>
					<li className="footer-link-sub"><Link to="/products/berries">Berries</Link></li>
					<li className="footer-link-sub"><Link to="/products/flowers">Flowers</Link></li>
					<li className="footer-link-sub"><Link to="/products/reductions">Reductions</Link></li>
				</ul>
				<ul className="footer-link-group">
					<li className="footer-link"><Link to="/about">About Us</Link></li>
					<li className="footer-link-sub"><Link to="/about/faq">FAQ</Link></li>
					<li className="footer-link-sub"><Link to="/about/delivery">Delivery</Link></li>
					<li className="footer-link-sub"><Link to="/about/returns">Returns</Link></li>
					<li className="footer-link-sub"><Link to="/about/disclaimer">Disclaimer</Link></li>
				</ul>
				<a className="footer-link footer-external" target="_blank" rel="noopener noreferrer" href="https://www.strangeindustries.co.uk">
					Strange Industries 2019
				</a>
			</footer>
		);
	}
}

export default Footer;