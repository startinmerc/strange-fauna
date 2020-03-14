import React, { Component } from 'react';
import { addWish, removeWish } from '../../store/actions/wish';
import { connect } from "react-redux";
import Star from '../SVGs/Star';

// Expects product id
// Returns button in top corner of product card

class AddToWish extends Component {

	handleClick(id){
		if(
			// If filtered cart by props.id is non-zero 
			this.props.wish.includes(this.props.id)
			){
			this.props.removeWish(id);
		} else {
			this.props.addWish(id, 1);
		}
	};

	render(){
		let inWish = this.props.wish.includes(this.props.id);
		if(this.props.button){
			return (
				<button className={`add-to-wish--btn ${inWish ? 'cart--added' : ''}`}
				 onClick={this.handleClick.bind(this, this.props.id)} aria-label="Add/remove from Wishlist">
					{inWish ? 'Remove from' : 'Add to' } Wishlist
				</button>
		)} else {
			return (
				<button className={`add-to-wish ${inWish ? 'wish--added' : ''}`}
				 onClick={this.handleClick.bind(this, this.props.id)} aria-label="Add/remove from Wishlist">
					<Star size={30}/>
				</button>
		)};
	};
};

function mapStateToProps(reduxState) {
	return {
		// reduce wish item objects to array of ids
		wish: reduxState.wish.wish.map((v)=>(v.id))
	};
};

export default connect(mapStateToProps, { addWish, removeWish })(AddToWish);
