import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";
import { addCart, clearCart } from "./cart";
import { addWish, clearWish } from "./wish";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export function logOut() {
  return dispatch => {
    // Clear JWT
    localStorage.jwtToken = "";
    // Clear cart/wishlist
    dispatch(clearWish());
    dispatch(clearCart());
    // clear current user
    dispatch(setCurrentUser({}));
  }
}

export function authUser(type, userData){
  return dispatch => {
    return new Promise((resolve,reject) => {
      // API call to auth user with username/password
      return apiCall("post", `/api/auth/${type}`, userData)
      .then(({token, ...user}) => {
        // Set auth token recieved from server
        localStorage.setItem("jwtToken", token);
        // Add user's carts to localStorage
        user.cart.forEach(i => addCart(i));
        user.wish.forEach(i => addWish(i));
        // Set user
        dispatch(setCurrentUser(user));
        // Clear errors
        dispatch(removeError());
        resolve();
      })
      .catch(err => {
        dispatch(addError(err));
        reject();
      })
    })
  }
}