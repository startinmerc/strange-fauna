import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Landing from './landing';
import Mushrooms from './Mushrooms';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render(){
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
