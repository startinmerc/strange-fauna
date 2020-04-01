import { LOAD_PRODUCTS, LOAD_ONE_PRODUCT } from "../actionTypes";

const products = (state=[],action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return [...action.products];
		case LOAD_ONE_PRODUCT:
			return [...state, action.product];
		default:
			return state;
	};
};

export default products;