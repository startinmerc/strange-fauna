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
			let newAddTotal = getCartTotals(newAddCart);
			// Return new state
			return {cart: newAddCart, total: newAddTotal};
		case REMOVE_CART:
			// Filter cart to exclude item
			let newRemoveCart = state.cart.filter(val => val.id !== action.id);
			// Update total
			let newRemoveTotal = getCartTotals(newRemoveCart);
			// Return new state
			return {cart: newRemoveCart, total: newRemoveTotal};
		case EDIT_CART_QTY:
			// Create copy of cart...
			let newEditCart = state.cart.map((item) => {
				// If item id matches...
				if (item.id === action.id) {
					// change quantity in copied cart
					item.qty = action.qty;
					return item;
				} else {
					// Otherwise keep item unchanged
					return item;
				}
			});
			// Create copy of total
			let newEditTotal = getCartTotals(newEditCart);
			// Return new state
			return {total: newEditTotal, cart: newEditCart};
		default:
			return state;
	};
};
