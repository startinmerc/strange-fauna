import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollTop from "./Components/Partials/ScrollTop";
import { configureStore } from "./store";
import jwtDecode from "jwt-decode";
import { setAuthorizationToken, setCurrentUser } from "./store/actions/auth";

const store = configureStore();

store.subscribe(() => {
	localStorage.setItem(
		"reduxState",
		JSON.stringify({
			cart: store.getState().cart,
			wish: store.getState().wish,
			delivery: store.getState().delivery,
		})
	);
});

if (localStorage.jwtToken) {
	// set Auth token if one is present in ls
	setAuthorizationToken(localStorage.jwtToken);
	try {
		// decode jwtToken, set decoded data as current user
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (e) {
		// clear user if unsucessful
		store.dispatch(setCurrentUser({}));
	}
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollTop />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
