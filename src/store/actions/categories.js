import { apiCall } from "../../services/api";
import { LOAD_CATEGORIES, LOAD_CATEGORY_PRODUCTS } from "../actionTypes";

export const loadCategories = categories => ({
	type: LOAD_CATEGORIES,
	categories
});

export const loadCategoryProducts = products => ({
	type: LOAD_CATEGORY_PRODUCTS,
	products
});

export const fetchCategories = () => {
	return dispatch => {
		return apiCall("get", "/api/categories/all")
			.then(res => dispatch(loadCategories(res)))
			.catch(err => dispatch(err.message));
	};
};

export const fetchCategoryProducts = category => {
	return dispatch => {
		return apiCall("get", `/api/categories/${category}/products`)
			.then(res => dispatch(loadCategoryProducts(res)))
			.catch(err => dispatch(err.message));
	};
};