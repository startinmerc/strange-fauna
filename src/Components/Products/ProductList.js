import React, {Component} from 'react';
import { connect } from "react-redux";
import { getItems, isMobile } from "../../middleware";
import ProductCard from './ProductCard';
import seeds from '../../seeds';
import './ProductList.css';

// Expects 'type' string as prop, either all, wish or product category
// Returns main element with responsive grid display of products

class ProductList extends Component {

	constructor(props){
		super(props);
		this.state = {
			products: seeds.products
		}
	}
	
	render(){
		const header = this.props.title || `Showing ${this.props.type} products`;
		document.title = header;
		var list;

		switch(this.props.type){
			case "all":
				list = this.state.products;
				break;
			case "wish":
				list = getItems(this.props.wish);
				break;
			default:
				list = this.state.products.filter((p)=>{
					return p.type === this.props.type;
				});
				break;
		}
		var renderList = list.map((prod)=>{return <ProductCard detail={prod} key={`prod-${prod.id}`}/>});

		return (
			<main>
				<div className="product-list-header">
					<h2>{header}{list.length < 1 ? ' is empty' : null}</h2>
				</div>
				<div className="product-list">
					{renderList}
				</div>
			</main>
		)
	}
}

function mapStateToProps(reduxState){
	return {
		wish: reduxState.wish.wish
	};
};

export default connect(mapStateToProps)(ProductList);
