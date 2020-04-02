import { apiCall } from "../../services/api";
import { LOAD_PRODUCTS, LOAD_ONE_PRODUCT, LOAD_CATEGORY_PRODUCTS } from "../actionTypes";

export const loadProducts = products => ({
	type: LOAD_PRODUCTS,
	products
});

export const loadCategoryProducts = products => ({
	type: LOAD_CATEGORY_PRODUCTS,
	products
});


export const loadOneProduct = product => ({
	type: LOAD_ONE_PRODUCT,
	product
});

export const fetchProducts = () => {
	return dispatch => {
		return apiCall("get", "/api/products/all")
			.then(res => dispatch(loadProducts(res)))
			.catch(err => console.log(err));
	};
};

export const fetchOneProduct = product_id => {
	return dispatch => {
		return apiCall("get", `/api/products/${product_id}`)
			.then(res => dispatch(loadOneProduct(res)))
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