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
			this.props.addCart(id,qty);
		}
	}

	render(){
		// If filtered cart by props.id is non-zero
		const inCart = this.props.cart.filter(
				(item)=>(item.id === this.props.id)
			).length > 0;
		return (
			<button className={`add-to-cart ${inCart ? 'cart--added' : ''}`}
			 disabled={this.props.stk < 1 && !inCart ? "disabled" : null}
			 onClick={this.handleClick.bind(this, this.props.id, this.props.qty, inCart)}>
				{inCart ? 'Remove from Cart' : this.props.stk > 0 ? 'Add to Cart' : 'Out of Stock'}
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
