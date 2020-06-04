import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import EditQuantity from './EditQuantity';
import { Link } from "react-router-dom";
import './ProductCard.css';

// Expects 'type' for renderinf and 'detail' object with product detail
// Returns ProductCard based on 'type', with default

function ProductCard({type, detail, delay=0}) {
	switch(type){
		case 'cart':
			// Shopping Cart ProductCard
			return (
				<div className="product-card product-card--cart">
					<img className="product-card__image" src={detail.photos[0]} alt={detail.name}/>
						<p className="display">
							<Link to={`/products/${detail._id}`}>
								{detail.name}
							</Link>
						</p>
						<AddToCart price={detail.price} id={detail._id} stk={detail.stock}/>
						<EditQuantity id={detail._id} qty={detail.qty} stk={detail.stock}/>
						<p className="product-card__price">{detail.qty} x ${detail.price}</p>
				</div>
			);
		case 'nav':
			// Nav Section ProductCard
			return (
				<div className="product-card product-card--nav">
					<AddToWish id={detail._id}/>
					<Link to={`/products/${detail._id}`}>
						<img className="product-card__image" src={detail.photos[0]} alt={detail.name}/>
					</Link>
					<div className="product-card__text">
						<Link to={`/products/${detail._id}`}>
							<h5>{detail.name}</h5>
						</Link>
						 <h5>${detail.price}</h5>
					</div>
					<AddToCart price={detail.price} id={detail._id} stk={detail.stock}/>
				</div>
			);
		default:
			// Default ProductCard
			return (
				<div className="product-card" style={{
					backgroundColor: detail.type.color,
					transform: "scale(0)",
					animation: "popUp 150ms ease-in forwards",
					animationDelay: `${delay*100}ms`
				}}>
					<AddToWish id={detail._id}/>
					<Link to={`/products/${detail._id}`}>
						<img className="product-card__image" src={detail.photos[0]} alt={detail.name}/>
					</Link>
					<div className="product-card__text">
						<Link to={`/products/${detail._id}`}>
							<h5>{detail.name}</h5>
						</Link>
						 <h5>${detail.price}</h5>
					</div>
					<AddToCart price={detail.price} id={detail._id} stk={detail.stock}/>
				</div>
			);
	};
};


export default ProductCard;
