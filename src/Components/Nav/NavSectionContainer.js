import React, {Component} from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import seeds from '../../seeds';

class NavSectionContainer extends Component {
	render(){
		const sections = seeds.categories.map((section,index)=>(
			<NavSection key={'nav-section-'+index} {...section}/>
		 ));
		return(
			<div className="nav-section-container">
				{sections}
			</div>
		);
	}
}

export default NavSectionContainer;
