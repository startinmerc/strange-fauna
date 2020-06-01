import { combineReducers } from "redux";
import cart from "./cart";
import wish from "./wish";
import products from "./products";
import categories from "./categories";
import other from "./other";
import landingSections from "./landingSections";

const rootReducer = combineReducers({
	cart,
	wish,
	products,
	categories,
	other,
	landingSections
});

export default rootReducer;
