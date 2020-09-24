import { combineReducers } from "redux";
import cart from "./cart";
import wish from "./wish";
import products from "./products";
import categories from "./categories";
import delivery from "./delivery";
import errors from "./errors";
import landingSections from "./landingSections";
import currentUser from "./currentUser";

const rootReducer = combineReducers({
	cart,
	wish,
	products,
	categories,
	delivery,
	landingSections,
	errors,
	currentUser
});

export default rootReducer;
