import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_CATEGORIES } from "../actionTypes";
import { loadNavProducts } from "./products";

export const loadCategories = (categories) => ({
	type: LOAD_CATEGORIES,
	categories,
});

export const _fetchCategories = (setLoading) => {
	return (dispatch) => {
		setLoading(true);
		return apiCall("get", "/api/categories/all")
			.then((res) => {
				setLoading(false);
				dispatch(loadCategories(res));
			})
			.catch((err) => {
				setLoading(false);
				dispatch(addError(err));
			});
	};
};

export const fetchCategories = (setLoading) => {
	return (dispatch) => {
		// Set passed in loading state to true
		setLoading(true);
		// Single API call to get categories and nav products
		return apiCall("get", "/api/categories/popnav")
			.then((res) => {
				// Set loading to false
				setLoading(false);
				// 1st array is categories, dispatch
				dispatch(loadCategories(res[0]));
				// 2nd array is featured products
				let formatProds = [];
				// Reformat to single array
				res[1].forEach((v) => formatProds.push(...v));
				dispatch(loadNavProducts(formatProds));
			})
			.catch((err) => {
				setLoading(false);
				dispatch(addError(err));
			});
	};
};
