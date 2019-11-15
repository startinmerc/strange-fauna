import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavSectionContainer from '../../Nav/NavSectionContainer';

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
			<header id="header">
				<div className="header-main">
					<Link to="/" style={{textDecoration: 'none'}}><h2 className="header-title">Strange Fauna</h2></Link>
					<div className="header-carts">
						<Wishlist />
						<Cart />
					</div>
				</div>
				<NavSectionContainer />
			</header>
		);
	}
}

export default Header;
