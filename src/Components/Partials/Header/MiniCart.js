import React, {Component} from 'react';
import MiniCartItem from './MiniCartItem';
import { connect } from "react-redux";
import { removeWish } from '../../../store/actions/wish';
import { removeCart } from '../../../store/actions/cart';

// Returns MiniCart with MiniCartItem children,
// expects array of IDs & type 'Cart' or 'Wishlist'.

class MiniCart extends Component {

	handleRemove(id, type){
		if (type==='Cart') {
			this.props.removeCart(id);
		} else if (type==='Wishlist') {
			this.props.removeWish(id);
		};
	};

	render(){

		return (
			<ul className="mini-cart">
				{
					// If cart is non-empty
					(this.props.items.length > 0) ? 
						// Map cart to MiniCartItems & bind remove function to item's ID 
						this.props.items.map((item)=>(
							<MiniCartItem key={`mini-${item.type}-${item.id}`} 
							 item={item} remove={
							 	this.handleRemove.bind(this, item.id, this.props.type)
							 }/>
					// Otherwise returns text
					)) : <li>'Empty!'</li>
				}
			</ul>
		);
	};
};

export default connect(null, { removeWish, removeCart })(MiniCart);
