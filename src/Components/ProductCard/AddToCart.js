import React, { Component } from "react";
import { addCart, removeCart } from "../../store/actions/cart";
import { connect } from "react-redux";

// Expects product id
// Returns add to cart button with conditional formatting

class AddToCart extends Component {
	// default 1 qty for adding to cart
	static defaultProps = {
		qty: 1,
		classes: "",
	};

	handleClick(id, qty, inCart, price) {
		if (inCart) {
			// Take obj from cart (Redux)
			this.props.removeCart(id);
		} else {
			// Add obj to cart (Redux)
			this.props.addCart(id, qty, price);
		}
	}

	render() {
		// If filtered cart by props.id is non-zero
		const inCart =
			this.props.cart.filter((item) => item.id === this.props.id).length > 0;
		return (
			<button
				className={`${inCart ? "button--added" : ""} ${this.props.classes}`}
				disabled={this.props.stk < 1 && !inCart ? "disabled" : null}
				onClick={this.handleClick.bind(
					this,
					this.props.id,
					this.props.qty,
					inCart,
					this.props.price
				)}
			>
				{inCart
					? "Remove from Cart"
					: this.props.stk > 0
					? "Add to Cart"
					: "Out of Stock"}
			</button>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart,
	};
}

export default connect(mapStateToProps, { addCart, removeCart })(AddToCart);
