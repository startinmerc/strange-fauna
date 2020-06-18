import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { CHANGE_DELIVERY, LOAD_DELIVERIES } from "../actionTypes";

export const changeDelivery = (delivery)=>(
	{
		type: CHANGE_DELIVERY,
		delivery
	}
);

export const loadDeliveries = (deliveries)=>(
	{
		type: LOAD_DELIVERIES,
		deliveries
	}
);

export const fetchDeliveries = () => {
	return dispatch => {
		// API call to get options
		return apiCall("get", "/api/deliveries")
			// Populate options
			.then(res => dispatch(loadDeliveries(res)))
			.catch(err => dispatch(addError(err)));
	};
};
