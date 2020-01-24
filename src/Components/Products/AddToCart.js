import React, { Component } from 'react';
import { addCart, removeCart } from '../../store/actions/cart';
import { connect } from "react-redux";

// Expects product id
// Returns add to cart button with conditional formatting

class AddToCart extends Component {

	// default 1 qty for adding to cart
	static defaultProps = {
		qty: 1
	};

	handleClick(id, qty){
		if(
			// If filtered cart by props.id is non-zero 
			this.props.cart.filter(
				(item)=>(item.id === id)
			).length > 0
			){
			this.props.removeCart(id);
		} else {
			this.props.addCart(id);
		}
	}

	render(){
		// If filtered cart by props.id is non-zero
		const inCart = this.props.cart.filter(
				(item)=>(item.id === this.props.id)
			).length > 0;
		return (
			<button className={`add-to-cart ${inCart ? 'cart-added' : ''}`}
			 onClick={this.handleClick.bind(this, this.props.id)}>
				{inCart ? 'Remove from' : 'Add to' } Cart
			</button>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart
	};
}

export default connect(mapStateToProps, { addCart, removeCart })(AddToCart);
