import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Landing from './landing';

class Product extends Component {
	render(){
		return (
		<div className="product-card">
			<h4>Product Title</h4>
			<p>Chillwave PBR&B sustainable pitchfork poke kitsch.</p>
		</div>
		)
	}
}


import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render(){
		const pList = [];
		for (var i = 0; i <= 6; i++) {
			pList.push(<Product />)
		}
		return(
			<div>
					<Header />
					<Switch>
						<Route path="/" component={Landing} exact />
						<Route path="/mushrooms" component={Mushrooms} />
						<Route component={Landing} />
					</Switch>
					<Footer />
			</div>
		)
	}
}

export default App;
