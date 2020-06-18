import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export default (state = {message: null, status: null}, action) => {
	switch (action.type) {
		case ADD_ERROR:
			return { ...state, message: action.error.message, status: action.error.status };
		case REMOVE_ERROR:
			return { ...state, message: null, status: null };
		default:
			return state;
	}
};