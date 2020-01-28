import { ADD_CART, REMOVE_CART, EDIT_CART_QTY } from "../actionTypes";

const DEFAULT_STATE = {
	cart: []
}

export default (state = DEFAULT_STATE, action) => {
	switch(action.type){
		case ADD_CART:
			return {...state, cart: [...state.cart, {id: action.id, qty: action.qty}]};
		case REMOVE_CART:
			let newCart = state.cart.filter(val => val.id !== action.id);
			return {...state, cart: newCart};
		case EDIT_CART_QTY:
			let editedCart = state.cart.map((item) => {
				if (item.id === action.id) {
					item.qty = action.qty;
					return item;
				} else {
					return item;
				}
			});
			return {...state, cart: editedCart};
		default:
			return state;
	};
};
