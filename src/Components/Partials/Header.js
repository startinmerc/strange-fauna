import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render(){
		return(
			<header className="header">
				<Link to="/" style={{textDecoration: 'none'}}><h2 className="header-title">Strange Fauna</h2></Link>
				<nav className="header-links">
					<li className="header-li">Wishlist</li>
					<li className="header-li">Cart</li>
				</nav>
			</header>
		);
	}
}

export default Header;
