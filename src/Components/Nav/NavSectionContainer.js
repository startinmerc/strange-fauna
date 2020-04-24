import React from 'react';
import './NavSectionContainer.css';
import NavSection from './NavSection';
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/categories";
import { fetchProducts } from "../../store/actions/products";

// Returns element containing nav sections with hover menus

function NavSectionContainer({categories, fetchCategories, products, fetchProducts}) {

	React.useEffect(()=>{
		if(categories.length === 0){
			fetchCategories()
		}
		fetchProducts();
	},[categories, fetchCategories, fetchProducts]);

	const sections = categories.map((section,index)=>(
		<NavSection key={'nav-section-'+index}
			products={products.filter((v)=>(v.type === section.section)).slice(-2)}
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
		products: state.products.products
	};
};

export default connect(mapStateToProps, { fetchCategories, fetchProducts })(NavSectionContainer);
