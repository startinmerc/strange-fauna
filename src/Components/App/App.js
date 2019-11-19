import React, {Component} from 'react';
import './App.css';
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

class App extends Component {
	render(){
		return(
			<div>
					<Header wish={this.props.wish} cart={this.props.cart}/>
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

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(
	App
);
