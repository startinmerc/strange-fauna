import React, { Component } from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import { Link } from "react-router-dom";
import { addCart, removeCart } from '../../store/actions/cart';
import { addWish, removeWish } from '../../store/actions/wish';
import { connect } from "react-redux";
import './ProductCard.css';

// Expects 'detail' object to be passed in with product detail
// Returns ProductCard based on 'type', with default

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
		// Figure if item is in wish/cart
		const inCart = this.props.cart.includes(this.props.detail.id);
		const inWish = this.props.wish.includes(this.props.detail.id);
		switch(this.props.type){
			case 'cart':
				// Shopping Cart ProductCard
				return (
					<div className="cart product-card">
						<img className="cart product-card-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
						<div className="cart product-card-body">
							<Link to={`/products/${this.props.detail.id}`}>
								<p>{this.props.detail.name}</p>
							</Link>
							<AddToCart id={this.props.detail.id}/>
						</div>
						<p className="cart product-card-price">${this.props.detail.price}</p>
					</div>
				);
			case 'nav':
				// Nav Section ProductCard
				return (
					<div className="nav product-card">
						<AddToWish handleClick={this.wishClick.bind(this, this.props.detail.id)} inState={inWish}/>
						<Link to={`/products/${this.props.detail.id}`}>
							<img className="nav product-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
						</Link>
						<div className="nav product-card-text">
							<Link to={`/products/${this.props.detail.id}`}>
								<h5>{this.props.detail.name}</h5>
							</Link>
							 <h5>${this.props.detail.price}</h5>
						</div>
						<AddToCart id={this.props.detail.id}/>
					</div>
				)
			default:
				// Default ProductCard
				return (
					<div className="product-card" style={{backgroundColor: `var(--${this.props.detail.type})`}}>
						<AddToWish handleClick={this.wishClick.bind(this, this.props.detail.id)} inState={inWish}/>
						<Link to={`/products/${this.props.detail.id}`}>
							<img className="product-image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
						</Link>
						<div className="product-card-text">
							<Link to={`/products/${this.props.detail.id}`}>
								<h5>{this.props.detail.name}</h5>
							</Link>
							 <h5>${this.props.detail.price}</h5>
						</div>
						<AddToCart id={this.props.detail.id}/>
					</div>
				);
			}
	}

}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish,
		cart: reduxState.cart.cart
	};
}

export default connect(mapStateToProps, { addCart, removeCart, addWish, removeWish })(ProductCard);
