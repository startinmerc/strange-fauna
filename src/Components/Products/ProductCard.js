import React from 'react';
import { Link } from "react-router-dom";

function ProductCard({detail}){
	return (
		<div>
			<h5>{detail.name}</h5>
			<img src={detail.photos[0]} alt={detail.name}/>
			<p>{detail.type}</p>
			<p><Link to={`/products/${detail.id}`}>Learn More</Link></p>
		</div>
	)
}

export default ProductCard;