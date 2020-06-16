import React from 'react';
import Header from '../Partials/Header/Header';
import MobileHeader from '../Partials/Header/MobileHeader';
import Footer from '../Partials/Footer/Footer';
import MobileMenu from '../Partials/MobileMenu/MobileMenu';
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import Cart from '../Carts/Cart';
import Wishlist from '../Carts/Wishlist';
import Checkout from '../Carts/Checkout';
import About from '../About/About';
import Loader from '../Partials/Loader/Loader';
import { Route, Switch } from 'react-router-dom';
import { isMobile } from '../../middleware';
import { Helmet } from 'react-helmet';

import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";

const App = ({errors, fetchCategories, categories})=> {
	React.useEffect(()=>{
		fetchCategories();
	},[fetchCategories])
	const emailRef = React.useRef(null);
	if(categories.length === 0){
		return (
			<Loader />
		);
	}
	return (
		<div id="container">
			{errors.message && <div id="errors">{errors.message}</div>}
			<Helmet>
				<meta charSet="utf-8" />
				<title>Strange Fauna</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta	name="description" content="Vendor of commercial and private flowers and funghi"/>
				<link rel="apple-touch-icon" href="logo192.png" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
				<title>Strange Flora</title>
			</Helmet>
			{isMobile() ? <MobileHeader /> : <Header />}
			<Switch>
				<Route path="/" exact render={() => <Landing emailRef={emailRef}/>}/>
				<Route path="/products" component={Products} />
				<Route path="/about" component={About} />
				<Route path="/checkout" component={Checkout} />
				<Route path='/wishlist' component={Wishlist} />
				<Route path='/cart' component={Cart}/>
				<Route component={Landing} />
			</Switch>
			<Footer emailRef={emailRef}/>
			{isMobile() ? <MobileMenu /> : null}
		</div>
	)
}

function mapStateToProps(state){
	return {
		errors: state.errors,
		categories: state.categories
	}
}

export default connect(mapStateToProps, { fetchCategories })(App);
