import { CHANGE_DELIVERY, CHANGE_GRID } from "../actionTypes";

const DEFAULT_STATE = {
	delivery: 50,
	gridColumns: "1fr 1fr 1fr"
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case CHANGE_DELIVERY:
			return {...state, delivery: Number(action.delivery)};
		case CHANGE_GRID:
			return {...state, gridColumns: action.grid}
		default:
			return state;
	};
};
