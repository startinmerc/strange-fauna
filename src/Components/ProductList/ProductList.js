import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
	fetchProducts,
	fetchCategoryProducts,
} from "../../store/actions/products";
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";
import "./ProductList.css";

// Expects 'type' string as prop, either all or product category, and title string
// Returns main element with responsive grid display of products

const ProductList = ({
	type,
	title,
	fetchProducts,
	products,
	fetchCategoryProducts,
}) => {
	React.useEffect(() => {
		function getList(type) {
			if (type === "all") {
				// API call to load all products to Redux state
				fetchProducts();
			} else {
				// API call to load category products to Redux state
				fetchCategoryProducts(type);
			}
		}
		getList(type);
		// ComponentWillUnmount function to empty products array
		// return function cleanUp(){products=[];}
	}, [type, fetchProducts, fetchCategoryProducts]);

	const header = title || `Showing ${type} products`;

	const renderList = products.map((prod, i) => {
		return <ProductCard detail={prod} key={prod._id} delay={i} />;
	});

	return (
		<main>
			<Helmet>
				<title>Strange Flora - {header}</title>
			</Helmet>
			<div className={`product-list__header to-right bg-${type}`}>
				<h2>{header}</h2>
			</div>
			<div className="product-list">{renderList}</div>
		</main>
	);
};

function mapStateToProps(state) {
	return {
		products: state.products.products,
	};
}

ProductList.propTypes = {
	type: PropTypes.oneOf(["mushroom","berry","flower","reduction","all"]),
	title: PropTypes.string,
};

export default connect(mapStateToProps, {
	fetchProducts,
	fetchCategoryProducts,
})(ProductList);
