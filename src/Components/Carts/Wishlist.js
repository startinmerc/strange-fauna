import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import ProductCard from '../Products/ProductCard';
import { apiCall } from "../../services/api";
// import './ProductList.css';

// Expects 'type' string as prop, either all, wish or product category, and title string
// Returns main element with responsive grid display of products

const Wishlist = ({ wish })=> {

	const [popWish, updatePopWish] = React.useState([]);

	React.useEffect(()=>{
		async function popItem(id){
			await apiCall("get", `/api/products/${id}`)
				.then(res=> updatePopWish(oldArray => [...oldArray, res]))
				.catch(err=> console.log(err));
		}
		wish.forEach(v=>{
			popItem(v.id);
		});
		// ComponentWillUnmount function to empty products array
		return function cleanUp(){updatePopWish([])}
	},[wish]);

	const renderList = popWish.map((prod, i)=>{
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
		wish: state.wish.wish
	};
};

export default connect(mapStateToProps)(Wishlist);
