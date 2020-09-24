import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export function authUser(type, userData){
  return dispatch => {
    return new Promise((resolve,reject) => {
      // API call to auth user with username/password
      return apiCall("post", `/api/auth/${type}`, userData)
      .then(({token, ...user}) => {
        // Set auth token recieved from server
        localStorage.setItem("jwtToken", token);
        // Set user
        dispatch(setCurrentUser(user));
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      })
    })
  }
}