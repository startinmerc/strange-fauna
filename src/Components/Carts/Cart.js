import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchOneProduct, clearSearch } from "../../store/actions/products";
import { fetchDeliveries, changeDelivery } from '../../store/actions/delivery';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import './Carts.css';

// No props expected
// Returns cart element

const Cart = ({ fetchOneProduct, clearSearch, changeDelivery, cart, delivery, options, search, fetchDeliveries, total })=> {

	React.useEffect(()=>{
		// Get delivery options
		fetchDeliveries();
		// Clear search store
		clearSearch();
		// Find details for all cart items
		cart.forEach((v)=>{
			fetchOneProduct(v.id);
		});
		// ComponentWillUnmount function to empty search array
		return function cleanUp(){clearSearch()}
	},[cart, clearSearch, fetchOneProduct, fetchDeliveries]);
	
	function handleChange(e) {
		changeDelivery(e.target.value);
	}

	return (
		<main id="cart">
			<Helmet>
				<title>Strange Flora - Cart</title>
			</Helmet>
			<div>
				<h2>Your Cart{total.qty === 0 && ' is empty'}</h2>
			</div>
			<div className="cart__list">
				{search.map(item => (
					// Add qty from cart to ProductCard
					<ProductCard detail={{...item, qty: cart.find(v=>v.id === item._id).qty}} key={`prod-${item._id}`} type="cart"/>
				))}
			</div>
			<div style={{textAlign: 'right'}}>
				<p className="cart__subtotal">Subtotal: ${total.val}</p>
				<p>
					<label htmlFor="deliveries">Choose delivery option:</label>
					<select value={delivery} onChange={handleChange} id="deliveries" name="deliveries">
						{options.map((op,i) => (
							<option key={`del-op-${i}`} value={op.price}>
								{op.title} - {op.speed} day(s) - ${op.price}
							</option>
							))}
					</select>
				</p>
				<h2>Total: ${total.val + delivery}</h2>
				{/*Change link depending on non-empty cart total*/}
				{total.qty > 0 ? <Link to="/checkout">Proceed to Checkout</Link> : <><p>Your cart is empty.</p><Link to="/products/all">Browse products</Link></>}
			</div>
		</main>
	)
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart,
		total: reduxState.cart.total,
		delivery: reduxState.delivery.delivery,
		options: reduxState.delivery.options,
		search: reduxState.products.search
	};
}

export default connect(mapStateToProps, { changeDelivery, fetchOneProduct, clearSearch, fetchDeliveries })(Cart);
