import { combineReducers } from "redux";
import cart from "./cart";
import wish from "./wish";
import other from "./other";

const rootReducer = combineReducers({
	cart,
	wish,
	other
});

export default rootReducer;
