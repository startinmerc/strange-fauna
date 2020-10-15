import {
	LOAD_PRODUCTS,
	LOAD_NAV_PRODUCTS,
	LOAD_ONE_PRODUCT,
	LOAD_CATEGORY_PRODUCTS,
	CLEAR_SEARCH,
	PUSH_REVIEW,
	REMOVE_REVIEW,
} from "../actionTypes";

const DEFAULT_STATE = {
	products: [],
	search: null,
	navProducts: [],
};

const products = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return { ...state, products: [...action.products] };
		case LOAD_NAV_PRODUCTS:
			return {
				...state,
				navProducts: [...state.navProducts, ...action.products],
			};
		case LOAD_CATEGORY_PRODUCTS:
			return { ...state, products: [...action.products] };
		case LOAD_ONE_PRODUCT:
			return { ...state, search: action.product };
		case CLEAR_SEARCH:
			return { ...state, search: DEFAULT_STATE.search };
		case PUSH_REVIEW:
			// Add to redux state in sync with api
			let newPushSearch = state.search;
			newPushSearch.reviews.push(action.review);
			return { ...state, search: newPushSearch };
		case REMOVE_REVIEW:
			// Remove from redux state in sync with api
			let newRemoveSearch = state.search;
			newRemoveSearch.reviews = state.search.reviews.filter(
				(v) => v._id !== action.review._id
			);
			return { ...state, search: newRemoveSearch };
		default:
			return state;
	}
};

export default products;
