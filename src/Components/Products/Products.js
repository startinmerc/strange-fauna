import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductDetail from "../ProductDetail/ProductDetail";
import ReviewForm from "../ReviewForm/ReviewForm";

// Acts as switch for React Router

function Products() {
	let match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.url}/all`}>
				<ProductList type="all" />
			</Route>
			<Route path={`${match.url}/mushrooms`}>
				<ProductList type="mushroom" />
			</Route>
			<Route path={`${match.url}/berries`}>
				<ProductList type="berry" />
			</Route>
			<Route path={`${match.url}/flowers`}>
				<ProductList type="flower" />
			</Route>
			<Route path={`${match.url}/reductions`}>
				<ProductList type="reduction" />
			</Route>
			<Route path={`${match.url}/:id/review`}>
				<main>
					<ReviewForm fullPage={true} />
				</main>
			</Route>
			<Route path={`${match.url}/:id`}>
				<ProductDetail />
			</Route>
			<Route path={`${match.url}/`}>
				<ProductList type="all" />
			</Route>
		</Switch>
	);
}

export default Products;
