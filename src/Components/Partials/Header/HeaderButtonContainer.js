import React from 'react';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import HeaderButton from './HeaderButton';

const HeaderButtonContainer = ({wish,cart}) => {

	return (
		<div className="header__buttons-container">
			<HeaderButton 
			 headerIcon={<Star size={'24px'} strokeWidth="2"/>}
			 headerText={'Wishlist'}
			 id={'header-wish'}
			 url={'/wishlist'}
			 items={wish}/>
			<HeaderButton 
			 headerIcon={<ShoppingCart size={'24px'} strokeWidth="2"/>}
			 headerText={'Cart'}
			 id={'header-cart'}
			 url={'/cart'}
			 items={cart.cart} total={cart.total}/>
		</div>
	);
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(HeaderButtonContainer);