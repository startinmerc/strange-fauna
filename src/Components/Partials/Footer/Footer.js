import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FacebookSquare, TwitterSquare, InstagramSquare, YoutubeSquare } from '../../SVGs/Socials';
import './Footer.css';

// Returns footer element with site links & link to Strange Industries

class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<div className="footer__column">
					<form className="signup">
						<label className="signup__label" htmlFor="email">
							Sign up to get our latest products, top deals and inspiring stories straight to your inbox.
							Plus, get £5 off your first order over £50 – please allow 24hrs to receive your code.
						</label>
						<br/>
						<input className="signup__input" type="text"/>
						<button className="signup__submit" type="submit">
							Sign Up!
						</button>
					</form>
					<div className="footer__socials">
						<a href="http://www.facebook.com"><FacebookSquare size="40px"/></a>
						<a href="http://www.twitter.com"><TwitterSquare size="40px"/></a>
						<a href="http://www.instagram.com"><InstagramSquare size="40px"/></a>
						<a href="http://www.youtube.com"><YoutubeSquare size="40px"/></a>
					</div>
				</div>
				<div className="footer__column">
					<ul className="footer__link-group" style={{textAlign: "right", paddingRight: "5%"}}>
						<li className="footer__link"><Link to="/products/all">Our Products</Link></li>
						<li className="footer__link-sub"><Link to="/products/mushrooms">Mushrooms</Link></li>
						<li className="footer__link-sub"><Link to="/products/berries">Berries</Link></li>
						<li className="footer__link-sub"><Link to="/products/flowers">Flowers</Link></li>
						<li className="footer__link-sub"><Link to="/products/reductions">Reductions</Link></li>
					</ul>
					<ul className="footer__link-group" style={{paddingLeft: "5%"}}>
						<li className="footer__link"><Link to="/about">About Us</Link></li>
						<li className="footer__link-sub"><Link to="/about/faq">FAQ</Link></li>
						<li className="footer__link-sub"><Link to="/about/delivery">Delivery</Link></li>
						<li className="footer__link-sub"><Link to="/about/returns">Returns</Link></li>
						<li className="footer__link-sub"><Link to="/about/disclaimer">Disclaimer</Link></li>
					</ul>
				</div>
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
