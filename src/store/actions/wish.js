import { ADD_WISH, REMOVE_WISH } from "../actionTypes";

export const addWish = (id, qty)=>(
	{
		type: ADD_WISH,
		id,
		qty
	}
);

export const removeWish = (id)=>(
	{
		type: REMOVE_WISH,
		id
	}
);
