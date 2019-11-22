import React from 'react';
import {
	Link,
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
				<main>
					<h1>About Us</h1>
					<p>
						Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
					</p>
					<p>
						Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
					</p>
					<p>
						Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
					</p>
					<h3><Link to="/about/faq">FAQ</Link></h3>
					<h3><Link to="/about/delivery">Delivery</Link></h3>
					<h3><Link to="/about/returns">Returns</Link></h3>
					<h3><Link to="/about/disclaimer">Disclaimer</Link></h3>
				</main>
			</Route>
		</Switch>
	);
}

export default About;