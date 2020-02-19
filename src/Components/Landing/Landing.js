import React from 'react';
import { Helmet } from 'react-helmet';
import './Landing.css';
import seeds from '../../seeds';
import LandingSection from './LandingSection';

// Returns main element with landing section components

function Landing() {

	const sections = seeds.landingSections.map((seed,index)=>(
		<LandingSection content={seed} key={`section-${index}`}/>
	))

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
