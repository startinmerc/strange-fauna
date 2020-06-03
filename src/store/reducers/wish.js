import { ADD_WISH, REMOVE_WISH } from "../actionTypes";

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_WISH:
			return [...state, action.id];
		case REMOVE_WISH:
			let newWish = state.filter(val => val !== action.id);
			return [...newWish];
		default:
			return state;
	};
};
