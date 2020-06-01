import { apiCall } from "../../services/api";
import { LOAD_LANDING_SECTIONS } from "../actionTypes";

export const loadLandingSections = (landingSections)=>(
	{
		type: LOAD_LANDING_SECTIONS,
		landingSections
	}
);

export const fetchDeliveries = () => {
	return dispatch => {
		// API call to get options
		return apiCall("get", "/api/landingSections")
			// Populate options
			.then(res => dispatch(loadLandingSections(res)))
			.catch(err => dispatch(err.message));
	};
};
