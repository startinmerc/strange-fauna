import { combineReducers } from "redux";
import cart from "./cart";
import wish from "./wish";
import products from "./products";
import categories from "./categories";
import delivery from "./delivery";
import landingSections from "./landingSections";

const rootReducer = combineReducers({
	cart,
	wish,
	products,
	categories,
	delivery,
	landingSections
});

export default rootReducer;
