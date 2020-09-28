import React from 'react';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import User from '../../SVGs/User';
import HeaderButton from './HeaderButton';

const HeaderButtonContainer = ({wish,cart, currentUser}) => {

	return (
		<div className="header__buttons-container">
			<HeaderButton 
			 headerIcon={<Star size={'24px'} strokeWidth="2" color="var(--black)"/>}
			 headerText={'Wishlist'}
			 id={'header-wish'}
			 url={'/wishlist'}
			 items={wish}/>
			<HeaderButton 
			 headerIcon={<ShoppingCart size={'24px'} strokeWidth="2" color="var(--black)"/>}
			 headerText={'Cart'}
			 id={'header-cart'}
			 url={'/cart'}
			 items={cart.cart} total={cart.total}/>
			<HeaderButton 
			 headerIcon={<User size={'24px'} strokeWidth="2" color="var(--black)"/>}
			 headerText={currentUser.isAuthenticated ? `${currentUser.user.username}` : "Sign In"}
			 id={'header-user'}
			 url={currentUser.isAuthenticated ? '/userpage' : '/signin'}
			/>
		</div>
	);
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart,
		currentUser: reduxState.currentUser
	};
}

export default connect(mapStateToProps)(HeaderButtonContainer);