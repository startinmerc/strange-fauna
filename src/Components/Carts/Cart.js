import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductCard from '../Products/ProductCard';
import seeds from '../../seeds';
import './Cart.css';

class Cart extends Component {

	render(){
		let text = '', list = [], total = 0;
		this.props.cart.forEach((id)=>{
			let item = (seeds.find((item)=>(item.id === id)));
			total += item.price;
			list.push(<ProductCard detail={item} key={`prod-${item.id}`} type={"cart"}/>);
		});
		return (
			<main>
				<div className="cart-header">
					<h2>Your Cart</h2>
					<h2>{text}</h2>
				</div>
				<div className="cart-list">
					{list}
				</div>
				<h2 className="cart-subtotal">Subtotal: ${total}</h2>
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(Cart);