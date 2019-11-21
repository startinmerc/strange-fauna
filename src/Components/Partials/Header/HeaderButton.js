import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish, removeCart } from '../../../actionCreators';
import MiniCartItem from './MiniCartItem';
import seeds from '../../../seeds';

class HeaderButton extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	render(){
		let cartContent = [], text = '', list = [];
		if(this.props.type==="wish"){
			this.props.wish.forEach((id)=>(
				cartContent.push(seeds.find((item)=>(item.id === id)))
			));
			text = `Wishlist (${this.props.wish.length})`;
			list = cartContent.map(item => (
				<MiniCartItem item={item} remove={this.removeWish.bind(this, item.id)}/>
			));
		} else {
			this.props.cart.forEach((id)=>(
				cartContent.push(seeds.find((item)=>(item.id === id)))
			));
			text = `Cart (${this.props.cart.length}): $${cartContent.reduce((a,v)=>(a+v.price),0)}`;
			list = cartContent.map(item => (
				<MiniCartItem item={item} remove={this.removeCart.bind(this, item.id)}/>
			));
		};

		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				<button className="header-button">{text}</button>
				<ul className="mini-cart">
					{list}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps, { removeWish, removeCart })(HeaderButton);