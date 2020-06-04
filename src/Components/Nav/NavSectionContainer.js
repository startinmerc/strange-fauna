import React from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";
import { fetchNavProducts } from "../../store/actions/products";

// Returns element containing nav sections with hover menus

function NavSectionContainer({categories, fetchCategories, products, fetchNavProducts}) {

	React.useEffect(()=>{
		if (categories.length === 0) {
			fetchCategories();
		}
		if (products.length === 0) {
			categories.forEach(cat => {
				if (cat.type !== "about"){
					fetchNavProducts(cat._id);
				}
			})
		}
	},[categories, products, fetchCategories, fetchNavProducts]);

	const sections = categories.map((cat,index)=>(
		<NavSection key={`nav-section-${cat.type}`}
			products={products.filter(p=>p.type.type === cat.type)}
		  {...cat}/>
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
