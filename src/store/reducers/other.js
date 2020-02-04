import { CHANGE_DELIVERY } from "../actionTypes";

const DEFAULT_STATE = {
	delivery: 50
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case CHANGE_DELIVERY:
			return {...state, delivery: Number(action.delivery)};
		default:
			return state;
	};
};
