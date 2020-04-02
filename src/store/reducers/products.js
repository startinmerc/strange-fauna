import { LOAD_PRODUCTS, LOAD_ONE_PRODUCT, LOAD_CATEGORY_PRODUCTS } from "../actionTypes";

const products = (state=[],action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return [...action.products];
		case LOAD_CATEGORY_PRODUCTS:
			return [...action.products];
		case LOAD_ONE_PRODUCT:
			return [action.product];
		default:
			return state;
	};
};

export default products;