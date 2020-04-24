import React from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";

// Returns element containing nav sections with hover menus

function NavSectionContainer({categories, fetchCategories}) {

	React.useEffect(()=>{
		if(categories.length === 0){
			fetchCategories()
		}
	},[categories, fetchCategories]);

	const sections = categories.map((section,index)=>(
		<NavSection key={'nav-section-'+index} {...section}/>
	 ));

	return(
		<ul className="nav-section__container" role="navigation">
			{sections}
		</ul>
	);
}

function mapStateToProps(state){
	return {
		categories: state.categories
	};
};

export default connect(mapStateToProps, { fetchCategories })(NavSectionContainer);
