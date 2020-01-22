import React, { Component } from 'react';
import { addWish, removeWish } from '../../store/actions/wish';
import { connect } from "react-redux";
import Star from '../SVGs/Star';

// Expects product id
// Returns button in top corner of product card

class AddToWish extends Component {
	handleClick(id){
		if(this.props.wish.includes(id)){
			this.props.removeWish(id);
		} else {
			this.props.addWish(id);
		}
	}

	render(){
		const inWish = this.props.wish.includes(this.props.id);
		return (
			<button className={`add-to-wish ${inWish ? 'wish-added' : ''}`}
			 onClick={this.handleClick.bind(this, this.props.id)}
			><Star size={30}/></button>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish
	};
};

export default connect(mapStateToProps, { addWish, removeWish })(AddToWish);
