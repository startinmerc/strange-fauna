import React, {Component} from "react";

const MiniCartItem = ({item, removeWish})=>(
	<li key={`mini${item.type}-${item.id}`} className="mini-cart-item" 
	 style={{backgroundColor: `var(--${item.type})`}}>
		<div className="mini-cart-item-text">
			<p>{item.name}</p>
			<p>${item.price}</p>
			<p><button onClick={removeWish}>Remove</button></p>
		</div>
		<img className="mini-cart-item-image" src={item.photos[0]} alt="" />
	</li>
)

export default MiniCartItem;