import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { changeDelivery } from '../../store/actions/other';
import { Link } from 'react-router-dom';
import { deliveries } from '../../seeds';
import { getItems, getTotal } from '../../middleware';

// Returns checkout element with local state of form content

const Checkout = ({ changeDelivery, cart, delivery })=> {

	const [noteCheckbox, setNoteCheckbox] = useState(false);
	const [form, setForm] = useState({});

	function handleChange(e) {
		changeDelivery(e.target.value);
	}

	function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setForm({
    	...form,
      [name]: value
    });
  }

	let items = getItems(cart);
	let total = getTotal(items);

	return (
		<main id="checkout">
			<Helmet>
				<title>Strange Flora - Checkout</title>
			</Helmet>
			<div id="order-summary">
				<h2>Order Summary</h2>
				<ul className="summary-section">
					{items.map((item)=>(<li style={{marginBottom: '0.5rem'}} key={item.id}>
						<img src={item.photos[0]} alt={item.name}/>
						<p style={{flexGrow: 1, marginLeft: '1rem', lineHeight: '1.5rem'}}>
							{item.name}<br/>
							{item.qty} x ${item.price}
						</p>
						<p>${item.price * item.qty}</p>
						</li>))}
				</ul>
				<p><Link to="/cart">Edit Cart</Link></p>
				<p style={{textAlign: 'right'}}>Subtotal: ${total}</p>
				<p style={{textAlign: 'right'}}>Delivery: ${delivery}</p>
				<p style={{textAlign: 'right', fontSize: '1.4rem'}} className="display">Total: ${total + Number(delivery)}</p>
			</div>

			<div id="checkout-summary">
				<h2>Delivery Address</h2>
				<div id="delivery-address" className="summary-section">
					<form>
						<label htmlFor="name">Name <span>*</span></label>
						<input onChange={handleInputChange} type="text" name="name" id="name" placeholder="Full Name"/>
						<label htmlFor="address1">Address 1 <span>*</span></label>
						<input onChange={handleInputChange} type="text" name="address1" id="address1" placeholder="Address 1"/>
						<label htmlFor="address2">Address 2</label>
						<input onChange={handleInputChange} type="text" name="address2" id="address2" placeholder="Address 2"/>
						<label htmlFor="town">Town/City <span>*</span></label>
						<input onChange={handleInputChange} type="text" name="town" id="town" placeholder="Town/City"/>
						<label htmlFor="county">County</label>
						<input onChange={handleInputChange} type="text" name="county" id="county" placeholder="County"/>
						<label htmlFor="postcode">Postcode <span>*</span></label>
						<input onChange={handleInputChange} type="text" name="postcode" id="postcode" placeholder="Postcode"/>
						<label htmlFor="phone">Phone Number <span>*</span></label>
						<input onChange={handleInputChange} type="text" name="phone" id="phone" placeholder="+440000000000"/>
					</form>
				</div>
				<div id="delivery-method" className="summary-section">
					<h3>Delivery method</h3>
					{
						deliveries.map((op,i) => (
							<div className="delivery-radio" key={`delivery-option-${i}`}>
								<label>
									<input type="radio" value={op.price} name="delivery-option"
									 id={`delivery-option-${i}`} checked={op.price === delivery} 
									 onChange={handleChange}/> {op.name} - ${op.price}
								</label>
							</div>
						))
					}
				</div>
				<div id="delivery-options" className="summary-section">
					<h3>Options</h3>
					<div id="check-container">
						<label htmlFor="check-1">Add a note about your order?</label>
						<input onClick={()=>setNoteCheckbox(!noteCheckbox)} type="checkbox" value="1" name="noteCheckbox" id="check-1"/><br/>
						{
							noteCheckbox && 
								<input onChange={handleInputChange} type="text" 
								 name="note" id="note" placeholder="Enter a note for our staff"
								 style={{width: 'calc(100% - 1rem + 2px)'}}/>
						}
					</div>
				</div>
				<button disabled className="summary-section">
					Pay Now
				</button>
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

export default connect(mapStateToProps, { changeDelivery })(Checkout);
