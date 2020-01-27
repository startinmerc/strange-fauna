import React from "react";
import { Link } from "react-router-dom";

// Expects item object with product data, and remove function
// Returns styled li with bound remove function & link to product detail

const MiniCartItem = ({item, remove})=>(
	<li className="mini-cart-item"
	 style={{
	 	// Background color based on product type
	 	backgroundColor: `var(--${item.type})`,
	 	background: `linear-gradient(90deg, #ffffff00 5%, var(--${item.type}) 50%)`
	 }}>
		<div className="mini-cart-item-text">
			<p className="display"><Link to={`/products/${item.id}`}>{item.name}</Link></p>
			<p>${item.price} x {item.qty}</p>
			<p><button onClick={remove}>Remove</button></p>
		</div>
		<img className="mini-cart-item-image" src={item.photos[0]} alt="" />
	</li>
);

export default MiniCartItem;
