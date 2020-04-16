import { LOAD_PRODUCTS, LOAD_ONE_PRODUCT, LOAD_CATEGORY_PRODUCTS } from "../actionTypes";

const DEFAULT_STATE = {
	products: [],
	foundProduct: {}
}

const products = (state=DEFAULT_STATE,action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return {...state, products: [...action.products]};
		case LOAD_CATEGORY_PRODUCTS:
			return {...state, products: [...action.products]};
		case LOAD_ONE_PRODUCT:
			return {...state, foundProduct: action.product};
		default:
			return state;
	};
};

export default products;