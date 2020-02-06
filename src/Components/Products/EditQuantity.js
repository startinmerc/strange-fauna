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
			<input type="number" name="quantity"
			 value={qty} className="quantity" onChange={handleChange}
			 disabled={props.stk < 1 ? "disabled" : null}
			 min="1" max={props.stk}/><br/>
			<button type="submit" style={{width: '100%'}}>Change Quantity</button>
		 </form>
	);
};

export default connect(null, { editCart })(EditQuantity);