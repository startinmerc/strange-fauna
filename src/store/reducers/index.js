import { combineReducers } from "redux";
import cart from "./cart";
import wish from "./wish";
import products from "./products";
import other from "./other";

const rootReducer = combineReducers({
	cart,
	wish,
	products,
	other
});

export default rootReducer;
