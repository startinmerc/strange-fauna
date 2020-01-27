import { ADD_CART, REMOVE_CART, EDIT_CART_QTY } from "../actionTypes";

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

export const editCart = (id,qty)=>(
	{
		type: EDIT_CART_QTY,
		id,
		qty
	}
);