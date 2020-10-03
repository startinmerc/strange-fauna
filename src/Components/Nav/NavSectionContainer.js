import React from "react";
import "./NavSectionContainer.css";
import NavSection from "./NavSection";
import { connect } from "react-redux";
import { fetchNavProducts } from "../../store/actions/products";

// Returns element containing nav sections with hover menus

function NavSectionContainer({ categories, products, fetchNavProducts }) {
	React.useEffect(() => {
		// If there are no NavProducts and categories have been loaded
		if (products.length === 0 && categories.length !== 0) {
			// For each category
			categories.forEach((cat) => {
				// As long as category isn't about
				if (cat.type !== "about") {
					// Send GET request to get category_id's featured products
					fetchNavProducts(cat._id);
				}
			});
		}
	}, [categories, products, fetchNavProducts]);

	// Map categories to NavSections
	const sections = categories.map((cat) => (
		<NavSection
			key={`nav-section-${cat.type}`}
			// Filter NavProducts by category to get relevant products & pass prop
			products={products.filter((p) => p.type.type === cat.type)}
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

export default connect(mapStateToProps, { fetchNavProducts })(
	NavSectionContainer
);
