import React from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";
import { fetchNavProducts } from "../../store/actions/products";

// Returns element containing nav sections with hover menus

function NavSectionContainer({categories, fetchCategories, products, fetchNavProducts}) {

	React.useEffect(()=>{
		async function popNav(){
			await fetchCategories();
		}
		if(categories.length === 0){
			popNav();
		} else if(products.length < (categories.length-1)*2) {
			categories.forEach(cat => {
				fetchNavProducts(cat.section);
			});
		}
	},[categories, fetchCategories, fetchNavProducts]);

	const sections = categories.map((section,index)=>(
		<NavSection key={`nav-section-${section.section}`}
			products={products.filter(p=>p.type === section.section)}
		  {...section}/>
	 ));

	return(
		<ul className="nav-section__container" role="navigation">
			{sections}
		</ul>
	);
}

function mapStateToProps(state){
	return {
		categories: state.categories,
		products: state.products.navProducts
	};
};

export default connect(mapStateToProps, { fetchCategories, fetchNavProducts })(NavSectionContainer);
