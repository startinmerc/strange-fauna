import { ADD_WISH, REMOVE_WISH, ADD_CART, REMOVE_CART, CHANGE_DELIVERY } from "./actionCreators";

const initialState = {
	wish: [1],
	cart: [9,26],
	delivery: 50
};

export default function rootReducer(state = initialState, action){
	switch(action.type){

		case ADD_WISH:
			return {...state, wish: [...state.wish, action.id]};
		case REMOVE_WISH:
			let wish = state.wish.filter(val => val !== action.id);
			return {...state, wish};

		case ADD_CART:
			return {...state, cart: [...state.cart, action.id]};
		case REMOVE_CART:
			let cart = state.cart.filter(val => val !== action.id);
			return {...state, cart};

		case CHANGE_DELIVERY:
			return {...state, delivery: Number(action.delivery)}

		default:
			return state;
	}
}
