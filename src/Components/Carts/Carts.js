import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeDelivery } from '../../actionCreators';
import ProductCard from '../Products/ProductCard';
import seeds from '../../seeds';
import './Carts.css';

// Returns cart, expects type prop: 0 = wishlist, 1 = shopping cart.

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

		// Compile list of items in cart/wish based on ids from Redux state
		let itemList = [], total = 0;
		options.ids[this.props.type].forEach((id)=>{
			// Find item in seeds from id
			let item = (seeds.products.find((item)=>(item.id === id)));
			// Update subtotal
			total += item.price;
			// Push ProductCard to itemList
			itemList.push(<ProductCard detail={item} key={`prod-${item.id}`}
				// includes cart type prop if needed
			 type={(options.subtotal[this.props.type]) ? "cart" : null}/>);
		});

		return (
			<main>
				<div className="cart-header">
					<h2>{options.header[this.props.type]}{(itemList.length === 0) ? ' is empty' : null}</h2>
				</div>
				<div className={options.class[this.props.type]}>
					{itemList}
				</div>
				{options.subtotal[this.props.type] ? 
					<div style={{textAlign: 'right'}}>
						<p className="cart-subtotal">Subtotal: ${total}</p>
							Choose delivery option: 
						<select value={this.state.delivery} onChange={this.handleChange}>
							{seeds.deliveries.map(op => (<option value={op.price}>{op.name}</option>))}
						</select>
						<p>Delivery: ${this.props.delivery}</p>
						<h2>Total: ${total + Number(this.props.delivery)}</h2>
					</div> : null}
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart,
		delivery: reduxState.delivery
	};
}

export default connect(mapStateToProps, { changeDelivery })(List);
