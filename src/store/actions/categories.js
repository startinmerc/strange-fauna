import { apiCall } from "../../services/api";
import { LOAD_CATEGORIES } from "../actionTypes";

export const loadCategories = categories => ({
	type: LOAD_CATEGORIES,
	categories
});

export const fetchCategories = () => {
	return dispatch => {
		return apiCall("get", "/api/categories/all")
			.then(res => dispatch(loadCategories(res)))
			.catch(err => dispatch(err.message));
	};
};

