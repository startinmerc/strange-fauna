import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeDelivery } from '../../store/actions/other';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import { deliveries } from '../../seeds';
import './Carts.css';
import { getItems } from '../../middleware';

// Expects type prop: 0 = wishlist, 1 = shopping cart.
// Returns cart element

class List extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.changeDelivery(e.target.value);
	}

	render(){

		const options = {
			ids: [this.props.wish,this.props.cart],
			header: ["Your Wishlist","Your Cart"],
			class: ['wish-list','cart-list'],
			subtotal: [false,true]
		};

		document.title = options.header[this.props.type];

		let items = getItems(options.ids[this.props.type]);
		
		return (
			<main>
				<div className="cart-header">
					<h2>{options.header[this.props.type]}{(items.itemList.length === 0) ? ' is empty' : null}</h2>
				</div>
				<div className={options.class[this.props.type]}>
					{
						items.itemList.map(item => (
						<ProductCard detail={item} key={`prod-${item.id}`}
						// includes cart type prop if needed
						 type={(options.subtotal[this.props.type]) ? "cart" : null}/>))
					}
				</div>
				{options.subtotal[this.props.type] ? 
					<div style={{textAlign: 'right'}}>
						<p className="cart-subtotal">Subtotal: ${items.total}</p>
						<p>
							Choose delivery option:
							<select value={this.props.delivery} onChange={this.handleChange}>
								{deliveries.map((op,i) => (<option key={`del-op-${i}`} value={op.price}>{op.name} - ${op.price}</option>))}
							</select>
						</p>
						<h2>Total: ${items.total + Number(this.props.delivery)}</h2>
						<Link to="/checkout">Proceed to Checkout</Link>
					</div> : null}
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish,
		cart: reduxState.cart.cart,
		delivery: reduxState.other.delivery
	};
}

export default connect(mapStateToProps, { changeDelivery })(List);
