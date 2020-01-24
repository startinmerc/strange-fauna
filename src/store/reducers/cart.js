import { ADD_CART, REMOVE_CART } from "../actionTypes";

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
		default:
			return state;
	};
};
