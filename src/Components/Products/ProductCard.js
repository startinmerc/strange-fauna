import React, { Component } from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import EditQuantity from './EditQuantity';
import { Link } from "react-router-dom";
import './ProductCard.css';

// Expects 'detail' object to be passed in with product detail
// Returns ProductCard based on 'type', with default

class ProductCard extends Component {

	render(){
		switch(this.props.type){
			case 'cart':
				// Shopping Cart ProductCard
				return (
					<div className="product-card product-card--cart">
						<img className="product-card__image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
							<p className="display">
								<Link to={`/products/${this.props.detail.id}`}>
									{this.props.detail.name}
								</Link>
							</p>
							<AddToCart id={this.props.detail.id} stk={this.props.detail.stock}/>
							<EditQuantity id={this.props.detail.id} qty={this.props.detail.qty} stk={this.props.detail.stock}/>
							<p className="product-card__price">{this.props.detail.qty} x ${this.props.detail.price}</p>
					</div>
				);
			case 'nav':
				// Nav Section ProductCard
				return (
					<div className="product-card product-card--nav">
						<AddToWish id={this.props.detail.id}/>
						<Link to={`/products/${this.props.detail.id}`}>
							<img className="product-card__image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
						</Link>
						<div className="product-card__text">
							<Link to={`/products/${this.props.detail.id}`}>
								<h5>{this.props.detail.name}</h5>
							</Link>
							 <h5>${this.props.detail.price}</h5>
						</div>
						<AddToCart id={this.props.detail.id} stk={this.props.detail.stock}/>
					</div>
				)
			default:
				// Default ProductCard
				return (
					<div className="product-card" style={{
						backgroundColor: `var(--${this.props.detail.type})`,
						animationDelay: `${this.props.delay*100}ms`
					}}>
						<AddToWish id={this.props.detail.id}/>
						<Link to={`/products/${this.props.detail.id}`}>
							<img className="product-card__image" src={this.props.detail.photos[0]} alt={this.props.detail.name}/>
						</Link>
						<div className="product-card__text">
							<Link to={`/products/${this.props.detail.id}`}>
								<h5>{this.props.detail.name}</h5>
							</Link>
							 <h5>${this.props.detail.price}</h5>
						</div>
						<AddToCart id={this.props.detail.id} stk={this.props.detail.stock}/>
					</div>
				);
		};
	};
};


export default ProductCard;
