import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";
import { addCart, clearCart } from "./cart";
import { addWish, clearWish } from "./wish";

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user,
	};
}

// needs user id & lists
export function logOut(user_id, lists) {
	return (dispatch) => {
		return apiCall("put", `/api/users/${user_id}`, lists)
		.then((res)=>{
			// Clear JWT
			localStorage.jwtToken = "";
			// Clear cart/wishlist
			dispatch(clearWish());
			dispatch(clearCart());
			// clear current user
			dispatch(setCurrentUser({}));
		})
		.catch((err)=>{
			dispatch(addError(err));
		});
	};
};

export function authUser(type, userData) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			// API call to auth user with username/password
			return apiCall("post", `/api/auth/${type}`, userData)
				.then(({ token, ...user }) => {
					// Set auth token recieved from server
					localStorage.setItem("jwtToken", token);
					// Add user's carts to localStorage
					user.cart.forEach((i) => dispatch(addCart(i.id,i.qty,i.price)));
					user.wish.forEach((i) => dispatch(addWish(i)));
					// Set user
					dispatch(setCurrentUser(user));
					// Clear errors
					dispatch(removeError());
					resolve();
				})
				.catch((err) => {
					dispatch(addError(err));
					reject();
				});
		});
	};
}

export function setAuthorizationToken(token) {
	setTokenHeader(token);
}