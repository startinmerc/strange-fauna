import React from 'react';
import { editCart } from '../../store/actions/cart';
import { connect } from 'react-redux';

function EditQuantity(props){
	// add qty to 'state' hook
	const [qty, setQty] = React.useState(props.qty);

	// update 'state' on value change
	function handleChange(e){
		setQty(Number(e.target.value));
	}	

	// prevent page refresh, fire editCart action with
	// id from prop, quantity from 'state'
	function handleSubmit(e){
		e.preventDefault();
		props.editCart(props.id, qty);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="quantity">Quantity:</label>
			<input type="number" name="quantity" id="quantity"
			 value={qty} className="quantity" onChange={handleChange}
			 min="1"/>
			 <button type="submit">Change Quantity</button>
		 </form>
	);
};

export default connect(null, { editCart })(EditQuantity);