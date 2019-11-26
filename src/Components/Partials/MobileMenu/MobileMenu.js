import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Menu from '../../SVGs/Menu';
import './MobileMenu.css';

class MobileMenu extends Component {
	render(){
		return(
			<div id="mobile-menu">
				<Link to="/wishlist" className="header-button empty">
					<Star size={'2rem'}/>
					<div className="mobile-menu-quantity">(1)</div>
				</Link>
				<Link to="/cart" className="header-button empty">
					<ShoppingCart size={'2rem'}/>
					<div className="mobile-menu-quantity">(1)</div>
				</Link>
				<Menu size={'2rem'}/>
			</div>
		);
	}
}

export default MobileMenu;
