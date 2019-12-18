import React from 'react';
import { Link } from "react-router-dom";

// Returns static about element with links to other about sections

function AboutMain() {
	return (
		<main id="about">
			<img alt="" src="https://images.unsplash.com/photo-1560241636-dcd877cb62ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"/>
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
			<div className="about-links-container">
				<h3><Link to="/about/faq">FAQ</Link></h3>
				<h3><Link to="/about/delivery">Delivery</Link></h3>
				<h3><Link to="/about/returns">Returns</Link></h3>
				<h3><Link to="/about/disclaimer">Disclaimer</Link></h3>
			</div>
		</main>
	)
}

export default AboutMain;
