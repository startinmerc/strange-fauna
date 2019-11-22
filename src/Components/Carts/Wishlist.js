import React, {Component} from 'react';
import { connect } from "react-redux";
import ProductCard from '../Products/ProductCard';
import seeds from '../../seeds';
import './Cart.css';

class Wishlist extends Component {

	render(){
		let text = '', list = [];
		this.props.wish.forEach((id)=>{
			let item = (seeds.find((item)=>(item.id === id)));
			list.push(<ProductCard detail={item} key={`prod-${item.id}`}/>);
		});
		return (
			<main>
				<div className="cart-header">
					<h2>Your Wishlist</h2>
					<h2>{text}</h2>
				</div>
				<div className="wish-list">
					{list}
				</div>
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish
	};
}

export default connect(mapStateToProps)(Wishlist);