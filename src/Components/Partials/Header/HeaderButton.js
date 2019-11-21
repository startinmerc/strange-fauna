import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish } from '../../../actionCreators';
import MiniCartItem from './MiniCartItem';
import seeds from '../../../seeds';

class HeaderButton extends Component {
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(val){
		this.props.addTodo(val);
	}

	removeWish(id){
		this.props.removeWish(id);
	}

	render(){
		let cartContent = [], text = '';
		if(this.props.type==="wish"){
			this.props.wish.forEach((id)=>(
				cartContent.push(seeds.find((item)=>(item.id === id)))
			));
			text = `Wishlist (${this.props.wish.length})`
		} else {
			this.props.cart.forEach((id)=>(
				cartContent.push(seeds.find((item)=>(item.id === id)))
			));
			text = `Cart (${this.props.cart.length}): $${cartContent.reduce((a,v)=>(a+v.price),0)}`;
		};
		let list = cartContent.map(item => (
			<MiniCartItem item={item} removeWish={this.removeWish.bind(this, item.id)}/>
		));
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

export default connect(mapStateToProps, { removeWish })(HeaderButton);