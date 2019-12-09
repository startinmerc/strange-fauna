import React, {Component} from 'react';
import MiniCartItem from './MiniCartItem';
import { connect } from "react-redux";
import { removeWish, removeCart } from '../../../actionCreators';

// Returns MiniCart with MiniCartItem children,
// expects array of IDs & type prop: 0 = wishlist, 1 = shopping cart.

class MiniCart extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	render(){
		return (
			<ul className="mini-cart">
				{
					(this.props.items.length > 0) ? 
					this.props.items.map((item)=>(
						<MiniCartItem key={`mini-${item.type}-${item.id}`} 
						 item={item} remove={
						 	(this.props.type === 0) ? this.removeWish.bind(this, item.id) : this.removeCart.bind(this, item.id)}/>
					)) : 'Empty!'
				}
				</ul>
		);
	}
}

export default connect(null, { removeWish, removeCart })(MiniCart);