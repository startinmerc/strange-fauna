import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchProducts, fetchCategoryProducts } from "../../store/actions/products";
import { getItems } from "../../middleware";
import ProductCard from './ProductCard';
import './ProductList.css';

// Expects 'type' string as prop, either all, wish or product category, and title string
// Returns main element with responsive grid display of products

const ProductList = ({ type, wish, title, fetchProducts, products, fetchCategoryProducts })=> {

	React.useEffect(()=>{
		function getList(type){
			if(type==="all"){
				fetchProducts();
			} else {
				fetchCategoryProducts(type);
			}
		}
		getList(type);
	},[type]);

	const header = title || `Showing ${type} products`;

	const renderList = products.map((prod, i)=>{
		return <ProductCard detail={prod} key={prod._id} delay={i} />
	});

	return (
		<main>
			<Helmet>
				<title>Strange Flora - {header}</title>
			</Helmet>
			<div className="product-list__header" style={{backgroundColor: `var(--${type})`}}>
				<h2>{header}{products.length < 1 ? ' is empty' : null}</h2>
			</div>
			<div className="product-list">
				{renderList}
			</div>
		</main>
	);
};

function mapStateToProps(state){
	return {
		wish: state.wish.wish,
		products: state.products.products
	};
};

export default connect(mapStateToProps, { fetchProducts, fetchCategoryProducts })(ProductList);
