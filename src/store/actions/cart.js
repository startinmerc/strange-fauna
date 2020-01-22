import { ADD_CART, REMOVE_CART } from "../actionTypes";

export const addCart = (id)=>(
	{
		type: ADD_CART,
		id
	}
);

export const removeCart = (id)=>(
	{
		type: REMOVE_CART,
		id
	}
);
