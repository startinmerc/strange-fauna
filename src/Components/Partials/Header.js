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

function Nav(){
		const colors = [
			{title: 'Mushrooms', ref: 'mushroom', color: 'var(--mushroom)'},
			{title: 'Berries', ref: 'berry', color: 'var(--berry)'},
			{title: 'Flowers', ref: 'flower', color: 'var(--flower)'},
			{title: 'Reductions', ref: 'reduction', color: 'var(--reduction)'},
			{title: 'About Us', ref: 'about', color: 'var(--primary)'}
		];
		const ops = colors.map((option,index)=>(
			<li key={'option-'+index} className="nav-link" style={{backgroundColor: option.color}}>
				<Link to={
					(option.ref==='about') ? '/about' : `/products/${option.title}`
				}>{option.title}</Link>
			</li>
		 ));
		return (<div className="nav-link-container">{ops}</div>);
}

class Header extends Component {
	render(){
		return(
			<header className="header">
				<div className="header-main">
					<Link to="/" style={{textDecoration: 'none'}}><h2 className="header-title">Strange Fauna</h2></Link>
					<div className="header-carts">
						<Wishlist />
						<Cart />
					</div>
				</div>
				<Nav />
			</header>
		);
	}
}

export default Header;
