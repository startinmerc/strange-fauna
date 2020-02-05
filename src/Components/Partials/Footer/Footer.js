import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Returns footer element with site links & link to Strange Industries

class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<ul className="footer__link-group">
					<li className="footer__link"><Link to="/products/all">Our Products</Link></li>
					<li className="footer__link-sub"><Link to="/products/mushrooms">Mushrooms</Link></li>
					<li className="footer__link-sub"><Link to="/products/berries">Berries</Link></li>
					<li className="footer__link-sub"><Link to="/products/flowers">Flowers</Link></li>
					<li className="footer__link-sub"><Link to="/products/reductions">Reductions</Link></li>
				</ul>
				<ul className="footer__link-group">
					<li className="footer__link"><Link to="/about">About Us</Link></li>
					<li className="footer__link-sub"><Link to="/about/faq">FAQ</Link></li>
					<li className="footer__link-sub"><Link to="/about/delivery">Delivery</Link></li>
					<li className="footer__link-sub"><Link to="/about/returns">Returns</Link></li>
					<li className="footer__link-sub"><Link to="/about/disclaimer">Disclaimer</Link></li>
				</ul>
				<p className="footer__external">
					A <a className="footer__link" rel="noopener noreferrer"
					 target="_blank" href="https://www.strangeindustries.co.uk">
						Strange Industries
					</a> Site.
				</p>
			</footer>
		);
	}
}

export default Footer;
