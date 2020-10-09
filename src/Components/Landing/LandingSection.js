import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/* 
Expects content:
{
	dark: Boolean (for dark text),
	header: Text,
	copy: Text,
	image: Text,
	links: [{title: Text, link: Text}] (Array of title & link dests),
	type: Text (product type)
}
and index
*/

const secondaries = {
	mushroom: "bg-pseudo-berry",
	berry: "bg-pseudo-mushroom",
	flower: "bg-pseudo-reduction",
	reduction: "bg-pseudo-flower",
	primary: "bg-pseudo-header",
};

function LandingSection({ content, index }) {
	const mappedLinks = content.links.map((link, i) => (
		<Link
			to={link.link}
			key={`section-link-${i}`}
			className="landing-section__link"
		>
			{link.title}
		</Link>
	));
	const dir = index % 2 ? "to-right" : "to-left";
	return (
		<section
			className={`landing-section ${content.dark ? "dark" : null}
			 bg-${content.type} ${dir}`}
		>
			<div
				className="landing-section__image"
				style={{ backgroundImage: `url(${content.image})` }}
				aria-hidden="true"
			></div>
			<div
				className={`landing-section__text ${secondaries[content.type]} ${dir}`}
			>
				<h2 className="landing-section__header">{content.header}</h2>
				<p className="landing-section__copy">{content.copy}</p>
			</div>
			<div className="landing-section__links">{mappedLinks}</div>
		</section>
	);
}

LandingSection.propTypes = {
	content: PropTypes.object,
	index: PropTypes.number,
};

export default LandingSection;
