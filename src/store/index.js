import rootReducer from "./reducers";
import { createStore } from "redux";

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

export function configureStore() {
	const store = createStore(
		rootReducer,
		persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}
