import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchOneProduct, clearSearch } from "../../store/actions/products";
import { fetchDeliveries, changeDelivery } from '../../store/actions/delivery';
import { Link } from 'react-router-dom';

// Returns checkout element with local state of form content

const Checkout = ({ fetchOneProduct, clearSearch, fetchDeliveries, changeDelivery, cart, delivery, search, options, history })=> {

	if(cart.cart.length === 0){
		history.push("/cart");
	}

	const [noteCheckbox, setNoteCheckbox] = useState(false);
	const [form, setForm] = useState({});

	React.useEffect(()=>{
		fetchDeliveries();
		clearSearch();
		cart.cart.forEach((v)=>{
			fetchOneProduct(v.id);
		});
		// ComponentWillUnmount function to empty search array
		return function cleanUp(){clearSearch()}
	},[cart, clearSearch, fetchOneProduct, fetchDeliveries]);


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

  const cartItems = search.map((item)=>{
	  	let qty = cart.cart.find(i=>(i.id === item._id)).qty;
	  	return (
				<li style={{marginBottom: '0.5rem'}} key={item._id}>
					<img src={item.photos[0]} alt={item.name}/>
					<p style={{flexGrow: 1, marginLeft: '1rem', lineHeight: '1.5rem'}}>
						{item.name}<br/>
						{qty} x ${item.price}
					</p>
					<p>${item.price * qty}</p>
				</li>
			)
	  }
  );

	return (
		<main id="checkout">
			<Helmet>
				<title>Strange Flora - Checkout</title>
			</Helmet>
			<div id="order-summary">
				<h2>Order Summary</h2>
				<ul className="summary-section">
					{cartItems}
				</ul>
				<p><Link to="/cart">Edit Cart</Link></p>
				<p style={{textAlign: 'right'}}>Subtotal: ${cart.total}</p>
				<p style={{textAlign: 'right'}}>Delivery: ${delivery}</p>
				<p style={{textAlign: 'right', fontSize: '1.4rem'}} className="display">Total: ${cart.total + delivery}</p>
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
						options.map((op,i) => (
							<div className="delivery-radio" key={`delivery-option-${i}`}>
								<label>
									<input type="radio" value={op.price} name="delivery-option"
									 id={`delivery-option-${i}`} checked={op.price === delivery} 
									 onChange={handleChange}/> {op.title} - ${op.price} - {op.speed} day(s) <small>{op.description}</small>
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
		cart: reduxState.cart,
		delivery: reduxState.delivery.delivery,
		options: reduxState.delivery.options,
		search: reduxState.products.search
	};
}

export default connect(mapStateToProps, { fetchOneProduct, clearSearch, fetchDeliveries, changeDelivery })(Checkout);
