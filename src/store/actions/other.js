import { CHANGE_DELIVERY } from "../actionTypes";

export const changeDelivery = (delivery)=>(
	{
		type: CHANGE_DELIVERY,
		delivery
	}
);
