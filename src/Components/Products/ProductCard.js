import React from 'react';
import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard({detail}){
	return (
		<div className="product-card" style={{backgroundColor: `var(--${detail.type})`}}>
			<Link to={`/products/${detail.id}`}>
				<img className="product-image" src={detail.photos[0]} alt={detail.name}/>
			</Link>
			<Link to={`/products/${detail.id}`}>
				<h5 className="product-header">{detail.name} ${detail.price}</h5>
			</Link>
		</div>
	);
}

export default ProductCard;
