import React from 'react';
import { Link } from "react-router-dom";
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

function ProductCard({detail}){
	return (
		<div className="product-card" style={{backgroundColor: `var(--${detail.type})`}}>
			<AddToWish/>
			<Link to={`/products/${detail.id}`}>
				<img className="product-image" src={detail.photos[0]} alt={detail.name}/>
			</Link>
			<div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between'}}>
				<Link to={`/products/${detail.id}`}>
					<h5>{detail.name}</h5>
				</Link>
				 <h5>${detail.price}</h5>
			</div>
			<AddToCart/>
		</div>
	);
}

export default ProductCard;
