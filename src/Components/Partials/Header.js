import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function MiniMenu(){
	return (
		<ul className="mini-cart">
			<li>MiniMenu</li>
			<li>MiniMenu</li>
			<li>MiniMenu</li>
		</ul>
	)
}

function Wishlist(){
	return (
		<div className="header-container" id="header-wish">
			<button className="header-button">Wishlist (0)</button>
			<MiniMenu />
		</div>	
	)
}

function Cart(){
	return (
		<div className="header-container" id="header-cart">
			<button className="header-button">Cart (0): $</button>
			<MiniMenu />
		</div>	
	)
}

class Header extends Component {
	render(){
		return(
			<header className="header">
				<Link to="/" style={{textDecoration: 'none'}}><h2 className="header-title">Strange Fauna</h2></Link>
				<div className="header-links">
					<Wishlist />
					<Cart />
				</div>
			</header>
		);
	}
}

export default Header;
