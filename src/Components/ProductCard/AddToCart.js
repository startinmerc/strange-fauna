import React from "react";
import PropTypes from "prop-types";
import { addCart, removeCart } from "../../store/actions/cart";
import { connect } from "react-redux";
import { propTypeMongoId } from "../../middleware";

// Expects product id
// Returns add to cart button with conditional formatting

function AddToCart({
	addCart,
	cart,
	classes = "",
	id,
	price,
	qty = 1,
	removeCart,
	stk,
}) {
	// If filtered cart by props.id is non-zero
	const inCart = cart.filter((item) => item.id === id).length > 0;

	function handleClick() {
		if (inCart) {
			// Take obj from cart (Redux)
			removeCart(id);
		} else {
			// Add obj to cart (Redux)
			addCart(id, qty, price);
		}
	}

	return (
		<button
			className={`${inCart ? "button--added" : ""} ${classes}`}
			disabled={stk < 1 && !inCart ? "disabled" : null}
			onClick={handleClick}
		>
			{inCart ? "Remove from Cart" : stk > 0 ? "Add to Cart" : "Out of Stock"}
		</button>
	);
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart,
	};
}

AddToCart.propTypes = {
	id: function (props, propName, componentName) {
		propTypeMongoId(props, propName, componentName);
	},
	price: PropTypes.number,
	stk: PropTypes.number,
};

export default connect(mapStateToProps, { addCart, removeCart })(AddToCart);
