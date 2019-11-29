import React from 'react';
import { Link } from 'react-router-dom';

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

function LandingSection({content}) {
	const mappedLinks = content.links.map((link)=>(
		<Link to={link.link} className="section-link">{link.title}</Link>
	));
	return (
		<section style={{
			color: `var(--${content.dark ? 'black' : 'white'})`,
			borderBottomColor: `var(--${content.type})`,
		}} className={content.type}>
			<div className="section-image" style={{backgroundImage: `url(${content.image})`}}></div>
			<div className="section-stripe" style={{backgroundColor: `var(--${content.type})`}}></div>
			<div className="section-text">
				<h2 className="section-header">{content.header}</h2>
				<p className="section-copy">{content.copy}</p>
				{mappedLinks}
			</div>
		</section>
	)
}

export default LandingSection;
