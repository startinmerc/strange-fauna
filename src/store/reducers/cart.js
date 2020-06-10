import { ADD_CART, REMOVE_CART, EDIT_CART_QTY } from "../actionTypes";
import { getCartTotals } from "../../middleware";

const DEFAULT_STATE = {
	cart: [],
	total: {qty: 0, val: 0}
}

export default (state = DEFAULT_STATE, action) => {
	switch(action.type){
		case ADD_CART:
			// Create copy of state & append new item
			let newAddCart = [...state.cart, {id: action.id, qty: action.qty, price: action.price}];
			// Update total
			let newAddTotal = state.total + (action.price * action.qty);
			// Return new state
			return {cart: newAddCart, total: newAddTotal};
		case REMOVE_CART:
			// Find item in cart
			let foundItem = state.cart.find(v=>(v.id === action.id));
			// Filter cart to exclude item
			let newRemoveCart = state.cart.filter(val => val.id !== action.id);
			// Subtract item x quantity from total
			let newRemoveTotal = state.total - (foundItem.price * foundItem.qty);
			// Return new state
			return {cart: newRemoveCart, total: newRemoveTotal};
		case EDIT_CART_QTY:
			// Create copy of total
			let newEditTotal = state.total;
			// Create copy of cart...
			let editedCart = state.cart.map((item) => {
				// If item id matches...
				if (item.id === action.id) {
					// remove original quantity x price from copied total
					newEditTotal -= (item.qty * item.price);
					// add new quantity x price to copied total
					newEditTotal += (action.qty * item.price);
					// change quantity in copied cart
					item.qty = action.qty;
					return item;
				} else {
					// Otherwise keep item unchanged
					return item;
				}
			});
			// Return new state
			return {total: newEditTotal, cart: editedCart};
		default:
			return state;
	};
};
