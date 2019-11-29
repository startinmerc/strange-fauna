import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import landingSeeds from '../../landingSeeds';
import LandingSection from './LandingSection';

function Landing() {
	const sections = landingSeeds.map((seed)=>(
		<LandingSection content={seed} />
	))
	return(
		<main id="landing">
			{sections}
		</main>
	);
}

export default Landing;
