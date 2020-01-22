import React, { Component } from 'react';
import { addCart, removeCart } from '../../store/actions/cart';
import { connect } from "react-redux";

// Expects product id
// Returns add to cart button with conditional formatting

class AddToCart extends Component {
	handleClick(id){
		if(this.props.cart.includes(id)){
			this.props.removeCart(id);
		} else {
			this.props.addCart(id);
		}
	}

	render(){
		const inCart = this.props.cart.includes(this.props.id);
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
