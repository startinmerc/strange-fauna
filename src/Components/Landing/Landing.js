import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import seeds from '../../seeds';
import LandingSection from './LandingSection';

function Landing() {
	const sections = seeds.landingSections.map((seed)=>(
		<LandingSection content={seed} />
	))
	return(
		<main id="landing">
			{sections}
		</main>
	);
}

export default Landing;
