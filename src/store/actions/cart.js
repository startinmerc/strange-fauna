import { ADD_CART, REMOVE_CART } from "../actionTypes";

export const addCart = (id,qty)=>(
	{
		type: ADD_CART,
		id,
		qty
	}
);

export const removeCart = (id)=>(
	{
		type: REMOVE_CART,
		id
	}
);
