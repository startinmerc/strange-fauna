import React from 'react';
import './Landing.css';
import seeds from '../../seeds';
import LandingSection from './LandingSection';

// Returns main element with landing section components

function Landing() {

	const sections = seeds.landingSections.map((seed,index)=>(
		<LandingSection content={seed} key={`section-${index}`}/>
	))
	
	document.title = 'Strange Flora';

	return(
		<main id="landing">
			{sections}
		</main>
	);
}

export default Landing;
