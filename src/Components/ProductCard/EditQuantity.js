import React from "react";
import PropTypes from "prop-types";
import { editCart } from "../../store/actions/cart";
import { connect } from "react-redux";
import { propTypeMongoId } from "../../middleware";

function EditQuantity(props) {
	// add qty to 'state' hook
	const [qty, setQty] = React.useState(props.qty);

	// update 'state' on value change
	function handleChange(e) {
		setQty(Number(e.target.value));
	}

	// prevent page refresh, fire editCart action with
	// id from prop, quantity from 'state'
	function handleSubmit(e) {
		e.preventDefault();
		props.editCart(props.id, qty);
	}

	return (
		<form onSubmit={handleSubmit} className="edit-quantity">
			<label htmlFor="quantity">Quantity:</label>
			<input
				type="number"
				name="quantity"
				id="quantity"
				value={qty}
				className="quantity"
				onChange={handleChange}
				disabled={props.stk < 1 ? "disabled" : null}
				min="1"
				max={props.stk}
			/>
			<button type="submit">Change Quantity</button>
		</form>
	);
}

EditQuantity.propTypes = {
	id: function (props, propName, componentName) {
		propTypeMongoId(props, propName, componentName);
	},
	qty: PropTypes.number,
	stk: PropTypes.number,
};

export default connect(null, { editCart })(EditQuantity);
