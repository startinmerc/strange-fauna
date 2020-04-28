import { LOAD_PRODUCTS, LOAD_NAV_PRODUCTS, LOAD_ONE_PRODUCT, LOAD_CATEGORY_PRODUCTS, CLEAR_SEARCH } from "../actionTypes";

const DEFAULT_STATE = {
	products: [],
	search: []
}

const products = (state=DEFAULT_STATE,action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return {...state, products: [...action.products]};
		case LOAD_CATEGORY_PRODUCTS:
			return {...state, products: [...action.products]};
		case LOAD_ONE_PRODUCT:
			return {...state, search: [...state.search, action.product]};
		case CLEAR_SEARCH:
			return {...state, search: DEFAULT_STATE.search};
		default:
			return state;
	};
};

export default products;