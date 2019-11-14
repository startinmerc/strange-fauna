import React from 'react';
import { Link } from "react-router-dom";
import './ProductCard.css';

function ProductCard({detail}){
	return (
		<div className="product-card" style={{backgroundColor: `var(--${detail.type})`}}>
			<Link to={`/products/${detail.id}`}>
				<img className="product-image" src={detail.photos[0]} alt={detail.name}/>
			</Link>
			<div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between'}}>
				<Link to={`/products/${detail.id}`}>
					<h5>{detail.name}</h5>
				</Link>
				 <h5>${detail.price}</h5>
			</div>
		</div>
	);
}

export default ProductCard;
