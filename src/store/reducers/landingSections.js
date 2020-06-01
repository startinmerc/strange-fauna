import { LOAD_LANDING_SECTIONS } from "../actionTypes";

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOAD_LANDING_SECTIONS:
			return [...action.landingSections];
		default:
			return state;
	};
};
