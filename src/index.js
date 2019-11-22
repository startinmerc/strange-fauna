import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from "react-redux";
import ScrollTop from "./Components/Partials/ScrollTop";

const store = createStore(
	rootReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollTop />
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();
