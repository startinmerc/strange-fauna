import { ADD_WISH, REMOVE_WISH } from "../actionTypes";

const DEFAULT_STATE = {
	wish: []
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_WISH:
			return {...state, wish: [...state.wish, {id: action.id, qty: action.qty}]};
		case REMOVE_WISH:
			let newWish = state.wish.filter(val => val !== action.id);
			return {...state, wish: newWish};
		default:
			return state;
	};
};
