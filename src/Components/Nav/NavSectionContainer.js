import React, {Component} from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import categories from '../../assets/categories';

class NavSectionContainer extends Component {
	render(){
		const ops = categories.map((option,index)=>(
			<NavSection key={'nav-section-'+index} {...option}/>
		 ));
		return(
			<div className="nav-section-container">
				{ops}
			</div>
		);
	}
}

export default NavSectionContainer;
