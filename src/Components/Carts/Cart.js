import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { changeDelivery } from '../../store/actions/other';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import { deliveries } from '../../seeds';
import './Carts.css';
import { getItems, getTotal } from '../../middleware';

// No props expected
// Returns cart element

const Cart = ({ changeDelivery, cart, delivery })=> {
	
	function handleChange(e) {
		changeDelivery(e.target.value);
	}
	// Get full item info
	let items = getItems(cart);
	let total = getTotal(items);
		
	return (
		<main id="cart">
			<Helmet>
				<title>Strange Flora - Cart</title>
			</Helmet>
			<div>
				<h2>Your Cart{(items.length === 0) ? ' is empty' : null}</h2>
			</div>
			<div className="cart__list">
				{items.map(item => (
					<ProductCard detail={item} key={`prod-${item.id}`} type="cart"/>
				))}
			</div>
			<div style={{textAlign: 'right'}}>
				<p className="cart__subtotal">Subtotal: ${total}</p>
				<p>
					<label htmlFor="deliveries">Choose delivery option:</label>
					<select value={delivery} onChange={handleChange} id="deliveries" name="deliveries">
						{deliveries.map((op,i) => (<option key={`del-op-${i}`} value={op.price}>{op.name} - ${op.price}</option>))}
					</select>
				</p>
				<h2>Total: ${total + Number(delivery)}</h2>
				<Link to="/checkout">Proceed to Checkout</Link>
			</div>
		</main>
	)
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart,
		delivery: reduxState.other.delivery
	};
}

export default connect(mapStateToProps, { changeDelivery })(Cart);
