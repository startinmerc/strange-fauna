import React from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from "react-router-dom";
import Delivery from './Delivery';
import Disclaimer from './Disclaimer';
import FAQ from './FAQ';
import Returns from './Returns';

function About() {
	let match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.url}/delivery`}>
				<Delivery />
			</Route>
			<Route path={`${match.url}/disclaimer`}>
				<Disclaimer />
			</Route>
			<Route path={`${match.url}/faq`}>
				<FAQ />
			</Route>
			<Route path={`${match.url}/returns`}>
				<Returns />
			</Route>
			<Route path={`${match.url}/`}>
				<h1>About Us</h1>
			</Route>
		</Switch>
	);
}

export default About;