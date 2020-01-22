import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import ScrollTop from "./Components/Partials/ScrollTop";
import { configureStore } from "./store";

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollTop />
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();
