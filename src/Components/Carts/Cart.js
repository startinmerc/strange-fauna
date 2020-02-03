import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeDelivery } from '../../store/actions/other';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import { deliveries } from '../../seeds';
import './Carts.css';
import { getItems, getTotal } from '../../middleware';

// No props expected
// Returns cart element

class Cart extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.changeDelivery(e.target.value);
	}

	render(){
		// Define header
		const header = "Your Cart";
		document.title = header;
		// Get full item info
		let items = getItems(this.props.cart);
		let total = getTotal(items);
		
		return (
			<main>
				<div className="cart-header">
					<h2>{header}{(items.length === 0) ? ' is empty' : null}</h2>
				</div>
				<div className="cart-list">
					{items.map(item => (
						<ProductCard detail={item} key={`prod-${item.id}`} type="cart"/>
					))}
				</div>
				<div style={{textAlign: 'right'}}>
					<p className="cart-subtotal">Subtotal: ${total}</p>
					<p>
						Choose delivery option:
						<select value={this.props.delivery} onChange={this.handleChange}>
							{deliveries.map((op,i) => (<option key={`del-op-${i}`} value={op.price}>{op.name} - ${op.price}</option>))}
						</select>
					</p>
					<h2>Total: ${total + Number(this.props.delivery)}</h2>
					<Link to="/checkout">Proceed to Checkout</Link>
				</div>
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart.cart,
		delivery: reduxState.other.delivery
	};
}

export default connect(mapStateToProps, { changeDelivery })(Cart);
