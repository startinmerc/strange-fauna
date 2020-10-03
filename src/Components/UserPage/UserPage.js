import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/actions/auth";

const UserPage = ({ currentUser, logOut, wish, cart }) => {
	function handleClick() {
		logOut(currentUser.user.id, { wish: wish, cart: cart.cart });
	}

	return (
		<main id="user-page">
			<h2>{currentUser.user.username}</h2>
			<p>
				<Link to="/cart">Your Cart</Link>
			</p>
			<p>
				<Link to="/wishlist">Your Wishlist</Link>
			</p>
			<p>
				<Link to="/" onClick={handleClick}>
					Log Out
				</Link>
			</p>
		</main>
	);
};

function mapStateToProps(reduxState) {
	return {
		currentUser: reduxState.currentUser,
		wish: reduxState.wish,
		cart: reduxState.cart,
	};
}

export default connect(mapStateToProps, { logOut })(UserPage);
