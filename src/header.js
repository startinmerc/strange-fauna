import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
	render(){
		return(
			<header className="header">
				<Link to="/" exact><h2 className="header-title">Strange Fauna</h2></Link>
				<nav className="header-links">
					<li className="header-li"><a href="#">Fauna</a></li>
					<li className="header-li"><a href="#">About</a></li>
				</nav>
			</header>
		);
	}
}

export default Header;
