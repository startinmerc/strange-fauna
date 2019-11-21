import { ADD_WISH, REMOVE_WISH, ADD_CART, REMOVE_CART } from "./actionCreators";

const initialState = {
	wish: [1],
	cart: [9,26]
};

export default function rootReducer(state = initialState, action){
	switch(action.type){

		case ADD_WISH:
			return {...state, wish: [...state.wish, action.wish]};
		case REMOVE_WISH:
			let wish = state.wish.filter(val => val !== action.id);
			return {...state, wish};

		case ADD_CART:
			return {...state, cart: [...state.wish, action.wish]};
		case REMOVE_CART:
			let cart = state.cart.filter(val => val !== action.id);
			return {...state, cart};
		default:
			return state;
	}
}
