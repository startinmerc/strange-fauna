import React, {Component} from 'react';
import './header.css';

class Header extends Component {
	render(){
		return(
			<header className="header">
				<h2 className="header-title">Strange Fauna</h2>
				<nav className="header-links">
					<li className="header-li"><a href="#">Fauna</a></li>
					<li className="header-li"><a href="#">About</a></li>
				</nav>
			</header>
		);
	}
}

export default Header;
