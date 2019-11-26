import React, {Component} from 'react';
import Header from '../Partials/Header/Header';
import MobileHeader from '../Partials/Header/MobileHeader';
import Footer from '../Partials/Footer/Footer';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import List from '../Carts/List';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
	render(){
		return(
			<div id="container">
				<Header />
				<MobileHeader />
				<Switch>
					<Route path="/" component={Landing} exact />
					<Route path="/products" component={Products} />
					<Route path="/about" component={About} />
					<Route path='/wishlist' render={(props) => <List {...props} type={0} />}/>
					<Route path='/cart' render={(props) => <List {...props} type={1} />}/>
					<Route component={Landing} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
