import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
	message: null,
	status: null
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_ERROR:
			return { ...state, ...action.error };
		case REMOVE_ERROR:
			return { ...state, ...DEFAULT_STATE };
		default:
			return state;
	}
};