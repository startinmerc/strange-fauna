import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import Landing from "../Landing/Landing";
import Products from "../Products/Products";
import Cart from "../Carts/Cart";
import Wishlist from "../Carts/Wishlist";
import Checkout from "../Carts/Checkout";
import About from "../About/About";
import Loader from "../Loader/Loader";
import Authform from "../Auth/Authform";
import UserPage from "../UserPage/UserPage";
import Errors from "../Errors/Errors";
import { Route, Switch } from "react-router-dom";
import { isMobile } from "../../middleware";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";
import { authUser } from "../../store/actions/auth";

const App = ({ errors, fetchCategories, authUser }) => {
	// Local state for mobile size
	const [isMo, upMo] = React.useState(false);
	// Local state for is loading
	const [isLoading, updateLoading] = React.useState(true);

	React.useEffect(() => {
		// API call to get categories for Nav component
		// Pass in fn to toggle loading
		isLoading && fetchCategories(updateLoading);
		// Media query to listen for mobile size for rendering components
		isMobile(upMo);
	}, [fetchCategories, isLoading]);

	// Ref for email input field
	const emailRef = React.useRef(null);

	return (
		<div id="container">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Strange Fauna</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Vendor of commercial and private flowers and funghi"
				/>
				<link rel="apple-touch-icon" href="logo192.png" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
				<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Scope+One&display=swap"
					rel="stylesheet"
				></link>
				<title>Strange Flora</title>
			</Helmet>
			<Header mobile={isMo}/>
			{errors.message && <Errors errors={errors} />}
			<Loader fullScreen={true} errors={errors} isLoading={isLoading} />
			{!isLoading && (
				<Switch>
					<Route
						path="/"
						exact
						render={() => <Landing emailRef={emailRef} />}
					/>
					<Route
						path="/signin"
						exact
						render={(props) => {
							return <Authform type="in" onAuth={authUser} {...props} />;
						}}
					/>
					<Route
						path="/signup"
						exact
						render={(props) => {
							return <Authform type="up" onAuth={authUser} {...props} />;
						}}
					/>
					<Route path="/userpage" component={UserPage} />
					<Route path="/products" component={Products} />
					<Route path="/about" component={About} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/wishlist" component={Wishlist} />
					<Route path="/cart" component={Cart} />
					<Route
						path="/loader"
						render={() => (
							<Loader fullScreen={true} errors={errors} isLoading={true} />
						)}
					/>
					<Route component={Landing} />
				</Switch>
			)}
			<Footer emailRef={emailRef} />
			{isMo && !isLoading ? <MobileMenu /> : null}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		errors: state.errors,
		currentUser: state.currentUser,
	};
}

export default connect(mapStateToProps, { fetchCategories, authUser })(App);
