import React, { Component } from 'react';
import { addWish, removeWish } from '../../store/actions/wish';
import { connect } from "react-redux";
import Star from '../SVGs/Star';

// Expects product id
// Returns button in top corner of product card

class AddToWish extends Component {

	// default 1 qty for adding to cart
	static defaultProps = {
		qty: 1
	};


	handleClick(id, qty){
		if(
			// If filtered cart by props.id is non-zero 
			this.props.wish.filter(
				(item)=>(item.id === id)
			).length > 0
			){
			this.props.removeWish(id);
		} else {
			this.props.addWish(id, qty);
		}
	}

	render(){
		const inWish = this.props.wish.includes(this.props.id);
		if(this.props.button){
			return (
				<button className={`wish-btn ${inWish ? 'cart-added' : ''}`}
			 onClick={this.handleClick.bind(this, this.props.id)}
			>{inWish ? 'Remove from' : 'Add to' } Wishlist
			</button>
		)} else {
			return (
				<button className={`add-to-wish ${inWish ? 'wish-added' : ''}`}
				 onClick={this.handleClick.bind(this, this.props.id)}
				><Star size={30}/></button>
		)};
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish
	};
};

export default connect(mapStateToProps, { addWish, removeWish })(AddToWish);
