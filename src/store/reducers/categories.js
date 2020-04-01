import { LOAD_CATEGORIES, LOAD_CATEGORY_PRODUCTS } from "../actionTypes";

const categories = (state=[],action) => {
	switch(action.type){
		case LOAD_CATEGORIES:
			return [...action.categories];
		case LOAD_CATEGORY_PRODUCTS:
			return [...action.products];
		default:
			return state;
	};
};

export default categories;
