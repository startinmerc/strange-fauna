import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_LANDING_SECTIONS } from "../actionTypes";

export const loadLandingSections = (landingSections) => ({
	type: LOAD_LANDING_SECTIONS,
	landingSections,
});

export const fetchLandingSections = () => {
	return (dispatch) => {
		// API call to get landing sections
		return (
			apiCall("get", "/api/landingSections")
				// Populate landing sections
				.then((res) => dispatch(loadLandingSections(res)))
				.catch((err) => dispatch(addError(err)))
		);
	};
};
