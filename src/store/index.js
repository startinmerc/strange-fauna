import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import cart & wishlist from localStorage if present
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

export function configureStore() {
	// Allow Redux Dev Tools if present
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		rootReducer,
		persistedState,
		// Include redux-thunk for async funcs
		composeEnhancers(
			applyMiddleware(thunk)
		)
	);
	return store;
}
