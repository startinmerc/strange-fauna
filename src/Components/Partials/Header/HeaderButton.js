import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish } from '../../../actionCreators'
// import MiniCart from './MiniCart';
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
			<li key={`mini${item.type}-${item.id}`} className="mini-cart-item" 
			 style={{backgroundColor: `var(--${item.type})`}}>
				<div className="mini-cart-item-text">
					<p>{item.name}</p>
					<p>${item.price}</p>
					<p><button onClick={this.removeWish.bind(this, item.id)}>Remove</button></p>
				</div>
				<img className="mini-cart-item-image" src={item.photos[0]} alt="" />
			</li>
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