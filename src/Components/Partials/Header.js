import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render(){
		return(
			<header className="header">
				<Link to="/"><h2 className="header-title">Strange Fauna</h2></Link>
				<nav className="header-links">
					<li className="header-li"><Link to="/all">All Products</Link></li>
					<li className="header-li"><Link to="/about">About</Link></li>
				</nav>
			</header>
		);
	}
}

export default Header;
