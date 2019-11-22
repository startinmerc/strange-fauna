import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { addCart, removeCart, addWish, removeWish } from '../../actionCreators';
import { connect } from "react-redux";

import './ProductCard.css';

const AddToCart = ({handleClick, inState})=> {
	return (
		<button className={`add-to-cart ${inState ? 'cart-added' : ''}`}
		 onClick={handleClick}>
			{inState ? 'Remove from' : 'Add to' } Cart
		</button>
	);
}

const AddToWish = ({handleClick, inState})=> {
	return (
		<button className={`add-to-wish ${inState ? 'wish-added' : ''}`}
		 onClick={handleClick}
		></button>
	);
}

class ProductCard extends Component {

	cartClick(id){
		if(this.props.cart.includes(id)){
			this.props.removeCart(id);
		} else {
			this.props.addCart(id);
		}
	}

	wishClick(id){
		if(this.props.wish.includes(id)){
			this.props.removeWish(id);
		} else {
			this.props.addWish(id);
		}
	}

	render(){
		const inCart = this.props.cart.includes(this.props.detail.id);
		const inWish = this.props.wish.includes(this.props.detail.id);
		if(this.props.type){
			return (
				<div className="cart-product-card">
					<img className="cart-product-card-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
					<div className="cart-product-card-body">
						<Link to={`/products/${this.props.detail.id}`}>
							<p>{this.props.detail.name}</p>
						</Link>
						<AddToCart handleClick={this.cartClick.bind(this, this.props.detail.id)} inState={inCart}/>
					</div>
					<p className="cart-product-card-price">${this.props.detail.price}</p>
				</div>
		);} else {
			return (
				<div className="product-card" style={{backgroundColor: `var(--${this.props.detail.type})`}}>
					<AddToWish handleClick={this.wishClick.bind(this, this.props.detail.id)} inState={inWish}/>
					<Link to={`/products/${this.props.detail.id}`}>
						<img className="product-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
					</Link>
					<div className="product-card-text">
						<Link to={`/products/${this.props.detail.id}`}>
							<h4>{this.props.detail.name}</h4>
						</Link>
						 <h5>${this.props.detail.price}</h5>
					</div>
					<AddToCart handleClick={this.cartClick.bind(this, this.props.detail.id)} inState={inCart}/>
				</div>
			);
		}
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps, { addCart, removeCart, addWish, removeWish })(ProductCard);
