import React, {Component} from 'react';
import Header from '../Partials/Header/Header';
import MobileHeader from '../Partials/Header/MobileHeader';
import Footer from '../Partials/Footer/Footer';
import MobileMenu from '../Partials/MobileMenu/MobileMenu';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import Cart from '../Carts/Cart';
import Checkout from '../Carts/Checkout';
import About from '../About/About';
import ProductList from '../Products/ProductList';
import { Route, Switch } from 'react-router-dom';
import { isMobile } from '../../middleware';
import { Helmet } from 'react-helmet';

class App extends Component {

	render(){
		return(
			<div id="container">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Strange Fauna</title>
					<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
					<meta	name="description" content="Vendor of commercial and private flowers and funghi"/>
					<link rel="apple-touch-icon" href="logo192.png" />
					<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
					<title>Strange Flora</title>
				</Helmet>
				{isMobile() ? <MobileHeader /> : <Header />}
				<Switch>
					<Route path="/" component={Landing} exact />
					<Route path="/products" component={Products} />
					<Route path="/about" component={About} />
					<Route path="/checkout" component={Checkout} />
					<Route path='/wishlist' render={() => <ProductList type="wish" title="Your Wishlist"/>}/>
					<Route path='/cart' render={() => <Cart />}/>
					<Route component={Landing} />
				</Switch>
				<Footer />
				{isMobile() ? <MobileMenu /> : null}
			</div>
		)
	}
}

export default App;
