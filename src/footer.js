import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
	render(){
		return(
			<footer className="footer">
				<ul className="footer-link-group">
					<li><a className="footer-link" href="#">Products</a></li>
					<li><a className="footer-link-sub" href="#">Products Sub</a></li>
					<li><a className="footer-link-sub" href="#">Products Sub</a></li>
				</ul>
				<ul className="footer-link-group">
					<li><a className="footer-link" href="#">About</a></li>
					<li><a className="footer-link-sub" href="#">About Sub</a></li>
					<li><a className="footer-link-sub" href="#">About Sub</a></li>
				</ul>
				<a className="footer-link footer-external" href="https://www.strangeindustries.co.uk">
					Strange Industries 2019
				</a>
			</footer>
		);
	}
}

export default Footer;
