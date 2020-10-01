import { ADD_WISH, CLEAR_CART, REMOVE_WISH } from "../actionTypes";

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_WISH:
			return [...state, action.id];
		case REMOVE_WISH:
			let newWish = state.filter(val => val !== action.id);
			return [...newWish];
		case CLEAR_CART:
			return DEFAULT_STATE;
		default:
			return state;
	};
};
