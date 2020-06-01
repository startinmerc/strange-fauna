import React from 'react';
import { Helmet } from 'react-helmet';
import './Landing.css';
import LandingSection from './LandingSection';

// Returns main element with landing section components

function Landing() {

	const sections = []

	// seeds.landingSections.map((seed,index)=>(
	// 	<LandingSection content={seed} key={`section-${index}`}/>
	// ));

	function handleClick(){
		// Not great, needs to be ref when I learn!
		window.scrollTo(0,document.body.scrollHeight);
		document.querySelector("#email").focus();
	}

	sections.splice(1,0,
		<div className="cta" key="cta">
			<button className="cta__button display" onClick={handleClick}>
				Sign up to our newsletter!
			</button>
			<p className="cta__content">Sign up to get our latest products, top deals and inspiring stories straight to your inbox. Plus, get £5 off your first order over £50</p>
		</div>
	);

	return(
		<main id="landing">
			<Helmet>
				<title>Strange Flora</title>
			</Helmet>
			{sections}
		</main>
	);
}

export default Landing;
