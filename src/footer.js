import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<ul className="footer-link-group">
					<li className="footer-link"><Link to="/products">Our Products</Link></li>
					<li className="footer-link-sub"><Link to="/mushrooms">Mushrooms</Link></li>
					<li className="footer-link-sub"><Link to="/berries">Berries</Link></li>
					<li className="footer-link-sub"><Link to="/flowers">Flowers</Link></li>
					<li className="footer-link-sub"><Link to="/reductions">Reductions</Link></li>
				</ul>
				<ul className="footer-link-group">
					<li className="footer-link"><Link to="/about">FAQ</Link></li>
					<li className="footer-link-sub"><Link to="/delivery">Delivery</Link></li>
					<li className="footer-link-sub"><Link to="/returns">Returns</Link></li>
					<li className="footer-link-sub"><Link to="/disclaimer">Disclaimer</Link></li>
				</ul>
				<a className="footer-link footer-external" target="_blank" rel="noopener noreferrer" href="https://www.strangeindustries.co.uk">
					Strange Industries 2019
				</a>
			</footer>
		);
	}
}

export default Footer;
