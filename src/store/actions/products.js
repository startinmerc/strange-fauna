import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
	LOAD_PRODUCTS,
	LOAD_NAV_PRODUCTS,
	LOAD_ONE_PRODUCT,
	LOAD_CATEGORY_PRODUCTS,
	CLEAR_SEARCH,
} from "../actionTypes";

export const loadProducts = (products) => ({
	type: LOAD_PRODUCTS,
	products,
});

export const loadNavProducts = (products) => ({
	type: LOAD_NAV_PRODUCTS,
	products,
});

export const loadCategoryProducts = (products) => ({
	type: LOAD_CATEGORY_PRODUCTS,
	products,
});

export const loadOneProduct = (product) => ({
	type: LOAD_ONE_PRODUCT,
	product,
});

export const clearSearch = () => ({
	type: CLEAR_SEARCH,
});

export const fetchProducts = () => {
	return (dispatch) => {
		return apiCall("get", "/api/products/all")
			.then((res) => dispatch(loadProducts(res)))
			.catch((err) => dispatch(addError(err)));
	};
};

export const fetchOneProduct = (product_id) => {
	return (dispatch) => {
		return apiCall("get", `/api/products/${product_id}`)
			.then((res) => dispatch(loadOneProduct(res)))
			.catch((err) => dispatch(addError(err)));
	};
};

export const fetchCategoryProducts = (type) => {
	return (dispatch) => {
		return apiCall("get", `/api/categories/${type}/products`)
			.then((res) => dispatch(loadCategoryProducts(res)))
			.catch((err) => dispatch(addError(err)));
	};
};

export const fetchNavProducts = (type_id) => {
	return (dispatch) => {
		return apiCall("get", `/api/products/featured/${type_id}`)
			.then((res) => dispatch(loadNavProducts(res)))
			.catch((err) => dispatch(addError(err)));
	};
};

export const postReview = (product, user, data) => {
	return (dispatch) => {
		return apiCall("post", `/api/users/${user}/reviews`, {
			product: product,
			...data,
		})
			.then((res) => console.log(res))
			.catch((err) => dispatch(addError(err)));
	};
};
