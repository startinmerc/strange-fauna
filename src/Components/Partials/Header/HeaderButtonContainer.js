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
			 path={"m 3,0 l 0,10 l 0,429 l 308,0 l 0,-429 l -160,0 l 0,-10"}
			 items={wish}/>
			<HeaderButton 
			 headerIcon={<ShoppingCart size={'24px'} strokeWidth="2"/>}
			 headerText={'Cart'}
			 id={'header-cart'}
			 url={'/cart'}
			 path={"m 311,0 l 0,10 l 0,429 l -308,0 l 0,-429 l 160,0 l 0,-10"}
			 items={cart.cart} total={cart.total}/>
		</div>
	);
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(HeaderButtonContainer);