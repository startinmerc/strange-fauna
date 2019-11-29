import React from 'react';
import './Landing.css';
import seeds from '../../seeds';
import LandingSection from './LandingSection';

function Landing() {
	const sections = seeds.landingSections.map((seed,index)=>(
		<LandingSection content={seed} key={`section-${index}`}/>
	))
	return(
		<main id="landing">
			{sections}
		</main>
	);
}

export default Landing;
