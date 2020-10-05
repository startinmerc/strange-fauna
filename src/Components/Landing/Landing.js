import React from "react";
import { Helmet } from "react-helmet";
import "./Landing.css";
import LandingSection from "./LandingSection";
import { connect } from "react-redux";
import { fetchLandingSections } from "../../store/actions/landingSections";

// Returns main element with landing section components

function Landing({ sections, fetchLandingSections, emailRef }) {
	React.useEffect(() => {
		// If not already loaded
		if (sections.length === 0) {
			// API fetch landing sections
			fetchLandingSections();
		}
	}, [fetchLandingSections, sections]);

	function handleClick() {
		// Scroll to page bottom
		emailRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

		// Create IntersectionObserver to wait for smooth scroll to complete
		const observer = new IntersectionObserver(
			function (entry, observer) {
				// If in view
				if (entry[0].isIntersecting) {
					// Focus on email input
					emailRef.current.focus();
					// Remove observer
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		// Add observer to emailRef
		observer.observe(emailRef.current);
	}

	// Map sections from API
	const renderedSections = sections.map((seed, index) => (
		<LandingSection content={seed} key={`section-${seed._id}`} index={index} />
	));

	// Insert email CTA as second item in sections array
	renderedSections.splice(
		1,
		0,
		<div className="cta" key="cta">
			<button className="button--large display" onClick={handleClick}>
				Sign up to our newsletter!
			</button>
			<p className="cta__content">
				Sign up to get our latest products, top deals and inspiring stories
				straight to your inbox. Plus, get £5 off your first order over £50
			</p>
		</div>
	);

	return (
		<main id="landing">
			<Helmet>
				<title>Strange Flora</title>
			</Helmet>
			{renderedSections}
		</main>
	);
}

function mapStateToProps(reduxState) {
	return {
		sections: reduxState.landingSections,
	};
}

export default connect(mapStateToProps, { fetchLandingSections })(Landing);
