import React, { Component } from 'react';
import Star from '../SVGs/Star';
import { Link } from "react-router-dom";
import { addCart, removeCart, addWish, removeWish } from '../../actionCreators';
import { connect } from "react-redux";
import './ProductCard.css';

// Expects 'detail' object to be passed in with product detail
// Returns ProductCard based on 'type', with default

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
		><Star size={30}/></button>
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
							<AddToCart handleClick={this.cartClick.bind(this, this.props.detail.id)} inState={inCart}/>
						</div>
						<p className="cart product-card-price">${this.props.detail.price}</p>
					</div>
				);
				break;
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
						<AddToCart handleClick={this.cartClick.bind(this, this.props.detail.id)} inState={inCart}/>
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
						<AddToCart handleClick={this.cartClick.bind(this, this.props.detail.id)} inState={inCart}/>
					</div>
				);
				break;
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
