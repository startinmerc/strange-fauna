import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { fetchOneProduct, clearSearch } from "../../store/actions/products";
import ProductCard from '../Products/ProductCard';

// Returns ProductList-style display of Wishlist items

const Wishlist = ({ wish, search, fetchOneProduct, clearSearch })=> {

	React.useEffect(()=>{
		clearSearch();
		wish.forEach(v=>{
			fetchOneProduct(v);
		});
		// ComponentWillUnmount function to empty search array
		return function cleanUp(){clearSearch()}
	},[wish, clearSearch, fetchOneProduct]);

	const renderList = search.map((prod, i)=>{
		return <ProductCard detail={prod} key={prod._id} delay={i} />
	});

	return (
		<main>
			<Helmet>
				<title>Strange Flora - Wishlist</title>
			</Helmet>
			<div className="product-list__header" >
				<h2>Your wishlist{wish.length < 1 ? ' is empty' : null}</h2>
			</div>
			<div className="product-list">
				{renderList}
			</div>
		</main>
	);
};

function mapStateToProps(state){
	return {
		wish: state.wish,
		search: state.products.search
	};
};

export default connect(mapStateToProps, { fetchOneProduct, clearSearch })(Wishlist);
