import { ADD_WISH, REMOVE_WISH, CLEAR_WISH } from "../actionTypes";

export const addWish = (id) => ({
	type: ADD_WISH,
	id,
});

export const removeWish = (id) => ({
	type: REMOVE_WISH,
	id,
});

export const clearWish = () => ({
	type: CLEAR_WISH,
});
