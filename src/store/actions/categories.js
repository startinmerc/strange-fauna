import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_CATEGORIES } from "../actionTypes";

export const loadCategories = categories => ({
	type: LOAD_CATEGORIES,
	categories
});

export const fetchCategories = (setLoading) => {
	return dispatch => {
		setLoading(true);
		return apiCall("get", "/api/categories/all")
			.then(res => {
				setLoading(false);
				dispatch(loadCategories(res))})
			.catch(err => {
				setLoading(false);
				dispatch(addError(err))});
	};
};
