import React, {Component} from 'react';
import './App.css';
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
	render(){
		return(
			<div id="container">
				<Header />
				<Switch>
					<Route path="/" component={Landing} exact />
					<Route path="/products" component={Products} />
					<Route path="/about" component={About} />
					<Route component={Landing} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
