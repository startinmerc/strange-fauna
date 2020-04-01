 import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import { getItems } from "../../middleware";
import ProductCard from './ProductCard';
import seeds from '../../seeds';
import './ProductList.css';

// Expects 'type' string as prop, either all, wish or product category, and title string
// Returns main element with responsive grid display of products

const ProductList = ({ type, wish, title, fetchProducts, products })=> {
	React.useEffect(()=>{
		// switch(type){
		// 	case "all":
		// 		return fetchProducts();
		// 	case "wish":
		// 		return getItems(wish);
		// 	default:
		// 		return getCategoryProducts(type);
		// }
		fetchProducts()
	},[]);
	const header = title || `Showing ${type} products`;
	let list;

	switch(type){
		case "all":
			list = products;
			break;
		case "wish":
			list = getItems(wish);
			break;
		default:
			list = products.filter((p)=>{
				return p.type === type;
			});
			break;
	}

	var renderList = list.map((prod, i)=>{
		return <ProductCard detail={prod} key={`prod-${prod.id}`} delay={i} />
	});

	return (
		<main>
			<Helmet>
				<title>Strange Flora - {header}</title>
			</Helmet>
			<div className="product-list__header" style={{backgroundColor: `var(--${type})`}}>
				<h2>{header}{list.length < 1 ? ' is empty' : null}</h2>
			</div>
			<div className="product-list">
				{renderList}
			</div>
		</main>
	);
};

function mapStateToProps(reduxState){
	return {
		wish: reduxState.wish.wish,
		products: reduxState.products
	};
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
