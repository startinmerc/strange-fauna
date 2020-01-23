import { CHANGE_DELIVERY, CHANGE_GRID } from "../actionTypes";

export const changeDelivery = (delivery)=>(
	{
		type: CHANGE_DELIVERY,
		delivery
	}
);

export const changeGrid = (grid)=>(
	{
		type: CHANGE_GRID,
		grid
	}
);