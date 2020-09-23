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
import Authform from '../Auth/Authform';
import { Route, Switch } from 'react-router-dom';
import { isMobile } from '../../middleware';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";

const App = ({errors, fetchCategories, categories})=> {

	// Local state for mobile size
	const [isMo, upMo] = React.useState(false);
	// Local state for is loading
	const [isLoading, updateLoading] = React.useState(true);

	React.useEffect(()=>{
		// API call to get categories for Nav component
		isLoading && fetchCategories();
		// Media query to listen for mobile size for rendering components
		isMobile(upMo);
		// Update to see if still loading
		updateLoading(categories.length === 0 && errors.status !== 500)
	},[fetchCategories, categories, errors, isLoading])
	// Ref for email input field
	const emailRef = React.useRef(null);

	return (
		<div id="container">
			{errors.message && <div className="errors">{errors.message}</div>}
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
			{isMo ? <MobileHeader /> : <Header />}
			<Loader fullScreen={true} errors={errors} isLoading={isLoading} />
			{!isLoading && <Switch>
				<Route path="/" exact render={() => <Landing emailRef={emailRef} />} />
				<Route path="/signin" exact render={props => {return(<Authform type="in" {...props}/>)}} />
				<Route path="/signup" exact render={props => {return(<Authform type="up" {...props}/>)}} />
				<Route path="/products" component={Products} />
				<Route path="/about" component={About} />
				<Route path="/checkout" component={Checkout} />
				<Route path='/wishlist' component={Wishlist} />
				<Route path='/cart' component={Cart} />
				<Route path='/loader' render={() => <Loader fullScreen={true} errors={errors} isLoading={true} />} />
				<Route component={Landing} />
			</Switch>}
			<Footer emailRef={emailRef}/>
			{isMo ? <MobileMenu /> : null}
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
