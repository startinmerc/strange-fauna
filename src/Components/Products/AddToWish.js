import React, { Component } from 'react';
import { addWish, removeWish } from '../../store/actions/wish';
import { connect } from "react-redux";
import Star from '../SVGs/Star';

// Expects product id
// Returns button in top corner of product card

class AddToWish extends Component {

	handleClick(id, inWish){
		if(inWish){
			this.props.removeWish(id);
		} else {
			this.props.addWish(id, 1);
		}
	}

	render(){
		const inWish = this.props.wish.filter(
				(item)=>(item.id === this.props.id)
			).length > 0;
		if(this.props.button){
			return (
				<button className={`wish-btn ${inWish ? 'cart-added' : ''}`}
				 onClick={this.handleClick.bind(this, this.props.id, this.props.qty)}>
					{inWish ? 'Remove from' : 'Add to' } Wishlist
				</button>
		)} else {
			return (
				<button className={`add-to-wish ${inWish ? 'wish-added' : ''}`}
				 onClick={this.handleClick.bind(this, this.props.id, inWish)}>
					<Star size={30}/>
				</button>
		)};
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish
	};
};

export default connect(mapStateToProps, { addWish, removeWish })(AddToWish);
