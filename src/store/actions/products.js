import { apiCall } from "../../services/api";
import { LOAD_PRODUCTS, LOAD_NAV_PRODUCTS, LOAD_ONE_PRODUCT, LOAD_CATEGORY_PRODUCTS, CLEAR_SEARCH } from "../actionTypes";

export const loadProducts = products => ({
	type: LOAD_PRODUCTS,
	products
});

export const loadNavProducts = products => ({
	type: LOAD_NAV_PRODUCTS,
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

export const clearSearch = ()=>({
	type: CLEAR_SEARCH
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
			.catch(err => console.log(err));
	};
};

export const fetchCategoryProducts = category => {
	return dispatch => {
		return apiCall("get", `/api/categories/${category}/products`)
			.then(res => dispatch(loadCategoryProducts(res)))
			.catch(err => console.log(err));
	};
};

export const fetchNavProducts = category => {
	return dispatch => {
		return apiCall("get", `/api/products/featured/${category}`)
			.then(res => dispatch(loadNavProducts(res)))
			.catch(err => console.log(err));
	};
};