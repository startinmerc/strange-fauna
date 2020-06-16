import React from 'react';
import { Helmet } from 'react-helmet';
import './Landing.css';
import LandingSection from './LandingSection';
import { connect } from "react-redux";
import { fetchLandingSections } from "../../store/actions/landingSections";

// Returns main element with landing section components

function Landing({ sections, fetchLandingSections, emailRef }) {

	React.useEffect(()=>{
		if (sections.length === 0) {
			fetchLandingSections();
		}
	},[fetchLandingSections, sections])

	function handleClick(){
		// Scroll to page bottom
		emailRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});

		// Focus on email input when in view
		const observer = new IntersectionObserver(function(entry, observer) {
			if(entry[0].isIntersecting){
				emailRef.current.focus();
				observer.disconnect();
			}
		}, {threshold: 0.1});
		observer.observe(emailRef.current);
	}

	const renderedSections = sections.map(seed =>(
			<LandingSection content={seed} key={`section-${seed._id}`}/>
		)
	);

	renderedSections.splice(1,0,
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
				{renderedSections}
		</main>
	);
}

function mapStateToProps(reduxState){
	return {
		sections: reduxState.landingSections
	};
};

export default connect(mapStateToProps, { fetchLandingSections })(Landing);
