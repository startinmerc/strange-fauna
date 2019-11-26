import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Menu from '../../SVGs/Menu';
import './MobileMenu.css';

class MobileMenu extends Component {
	render(){
		return(
			<div id="mobile-menu">
				<Link to="/wishlist" className={`header-button ${(this.props.wish.length > 0) ? null : 'empty'}`}>
					<Star size={'2rem'}/>
					<div className="mobile-menu-quantity">({this.props.wish.length})</div>
				</Link>
				<Link to="/cart" className={`header-button ${(this.props.cart.length > 0) ? null : 'empty'}`}>
					<ShoppingCart size={'2rem'}/>
					<div className="mobile-menu-quantity">({this.props.cart.length})</div>
				</Link>
				<Menu size={'2rem'}/>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(MobileMenu);