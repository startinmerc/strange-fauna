import React, {Component} from 'react';
import Header from '../Partials/Header/Header';
import MobileHeader from '../Partials/Header/MobileHeader';
import Footer from '../Partials/Footer/Footer';
import MobileMenu from '../Partials/MobileMenu/MobileMenu';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import Carts from '../Carts/Carts';
import Checkout from '../Carts/Checkout';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

	render(){
		let mobile = window.innerWidth < 600;
		const header = mobile ? <MobileHeader /> : <Header />;
		const footer = mobile ? <MobileMenu /> : null;
		return(
			<div id="container">
				{header}
				<Switch>
					<Route path="/" component={Landing} exact />
					<Route path="/products" component={Products} />
					<Route path="/about" component={About} />
					<Route path="/checkout" component={Checkout} />
					<Route path='/wishlist' render={() => <Carts type={0} />}/>
					<Route path='/cart' render={() => <Carts type={1} />}/>
					<Route component={Landing} />
				</Switch>
				<Footer />
				{footer}
			</div>
		)
	}
}

export default App;
