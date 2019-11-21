import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { addCart, removeCart, addWish, removeWish } from '../../actionCreators';
import { connect } from "react-redux";

import './ProductCard.css';

function AddToCart() {
	return (
		<button className="add-to-cart"
		 onClick={(e)=>{e.target.classList.toggle('cart-added')}}
		>Add to Cart</button>
	);
}

function AddToWish() {
	return (
		<button className="add-to-wish"
		 onClick={(e)=>{e.target.classList.toggle('wish-added')}}
		></button>
	);
}

class ProductCard extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	addWish(id){
		this.props.addWish(id);
	}

	addCart(id){
		this.props.addCart(id);
	}

	render(){
		return (
			<div className="product-card" style={{backgroundColor: `var(--${this.props.detail.type})`}}>
				<AddToWish/>
				<Link to={`/products/${this.props.detail.id}`}>
					<img className="product-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
				</Link>
				<div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between'}}>
					<Link to={`/products/${this.props.detail.id}`}>
						<h5>{this.props.detail.name}</h5>
					</Link>
					 <h5>${this.props.detail.price}</h5>
				</div>
				<AddToCart/>
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

export default connect(mapStateToProps, { addCart, removeCart, addWish, removeWish })(ProductCard);
