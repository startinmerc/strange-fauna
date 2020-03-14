import React, {Component} from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import { categories } from '../../seeds';

// Returns element containing nav sections with hover menus

function NavSectionContainer() {
	const sections = categories.map((section,index)=>(
		<NavSection key={'nav-section-'+index} {...section}/>
	 ));

	return(
		<ul className="nav-section__container" role="navigation">
			{sections}
		</ul>
	);
}

export default NavSectionContainer;
