import React from "react";
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
*/

function LandingSection({ content }) {
	const mappedLinks = content.links.map((link, i) => (
		<Link
			to={link.link}
			key={`section-link-${i}`}
			className="landing-section__link"
		>
			{link.title}
		</Link>
	));
	return (
		<section
			className={`landing-section ${
				content.dark ? "dark" : null
			} landing-section--${content.type}`}
		>
			<div
				className="landing-section__image"
				style={{ backgroundImage: `url(${content.image})` }}
				aria-hidden="true"
			></div>
			<div className="landing-section__text">
				<h2 className="landing-section__header">{content.header}</h2>
				<p className="landing-section__copy display">{content.copy}</p>
			</div>
			<div className="landing-section__links">{mappedLinks}</div>
		</section>
	);
}

export default LandingSection;
