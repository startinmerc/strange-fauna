import React from "react";
import "./NavSectionContainer.css";
import NavSection from "./NavSection";
import { connect } from "react-redux";

// Returns element containing nav sections with hover menus

function NavSectionContainer({ categories, products }) {
	// Map categories to NavSections
	const sections = categories.map((cat,ind) => (
		<NavSection
			key={`nav-section-${cat.type}`}
			// Get relevant navProducts
			products={products[ind]}
			{...cat}
		/>
	));

	return (
		<ul className="nav-section__container" role="navigation">
			{sections}
		</ul>
	);
}

function mapStateToProps(state) {
	return {
		categories: state.categories,
		products: state.products.navProducts,
	};
}

export default connect(mapStateToProps)(NavSectionContainer);
