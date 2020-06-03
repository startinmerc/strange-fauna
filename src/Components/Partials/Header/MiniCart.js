import React from 'react';
import MiniCartItem from './MiniCartItem';
import { connect } from "react-redux";
import { removeWish } from '../../../store/actions/wish';
import { removeCart } from '../../../store/actions/cart';

// Expects type 'Cart' or 'Wishlist', and cart or id array
// Returns MiniCart with MiniCartItem children

function MiniCart({items, type, removeCart, removeWish}) {

	function handleRemove(id, type){
		if (type==='Cart') {
			removeCart(id);
		} else {
			removeWish(id);
		};
	};

	return (
		<ul className="mini-cart">
			{
				// If cart is non-empty
				(items.length > 0) ? 
					// Map cart to MiniCartItems & bind remove function to item's ID 
					items.map((item)=>(
						<MiniCartItem key={`mini-${type}-${item.id}`} 
						 item={item} remove={handleRemove}
						 type={type}/>
				// Otherwise returns text
				)) : <li>Your {type} is empty!</li>
			}
		</ul>
	);
};

export default connect(null, { removeWish, removeCart })(MiniCart);
