import React from "react";
import { Link } from "react-router-dom";

const MiniCartItem = ({item, remove})=>(
	<li className="mini-cart-item" 
	 style={{
	 	backgroundColor: `var(--${item.type})`,
	 	background: `linear-gradient(90deg, #ffffff00 5%, var(--${item.type}) 50%)`
	 }}>
		<div className="mini-cart-item-text">
			<p><Link to={`/products/${item.id}`}>{item.name}</Link></p>
			<p>${item.price}</p>
			<p><button onClick={remove}>Remove</button></p>
		</div>
		<img className="mini-cart-item-image" src={item.photos[0]} alt="" />
	</li>
)

export default MiniCartItem;
