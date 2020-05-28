import { LOAD_DELIVERIES, CHANGE_DELIVERY } from "../actionTypes";

const DEFAULT_STATE = {
	deliveryOptions: [],
	delivery: 0
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOAD_DELIVERIES:
			return {...state, deliveryOptions: action.deliveries};
		case CHANGE_DELIVERY:
			return {...state, delivery: Number(action.delivery)};
		default:
			return state;
	};
};
