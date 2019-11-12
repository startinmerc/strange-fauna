import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit,", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];

function Products(){
	let match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.url}/all`}>
				<h1>Hi There! Products!</h1>
			</Route>
			<Route path={`${match.url}/mushrooms`}>
				<h1>Hi There! Mushrooms!</h1>
			</Route>
			<Route path={`${match.url}/berries`}>
				<h1>Hi There! Berries!</h1>
			</Route>
			<Route path={`${match.url}/flowers`}>
				<h1>Hi There! Flowers!</h1>
			</Route>
			<Route path={`${match.url}/reductions`}>
				<h1>Hi There! Reductions!</h1>
			</Route>
			<Route path={`${match.url}/`}>
				<h1>Hi There! Products!</h1>
			</Route>
		</Switch>
	);
};

export default Products;