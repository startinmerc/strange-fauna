import React, {Component} from 'react';
import { connect } from "react-redux";
import ProductCard from '../Products/ProductCard';
import seeds from '../../seeds';
import './Cart.css';

// expect 'wish' : 'cart'

class List extends Component {

	render(){
		const options = {
			ids: [this.props.wish,this.props.cart],
			text: ["Your Wishlist","Your Cart"],
			class: ['wish-list','cart-list'],
			subtotal: [false,true]
		};
		let list = [], total = 0;
		options.ids[this.props.type].forEach((id)=>{
			let item = (seeds.find((item)=>(item.id === id)));
			total += item.price;
			list.push(<ProductCard detail={item} key={`prod-${item.id}`}
			 type={(options.subtotal[this.props.type]) ? "cart" : null}/>);
		});
		return (
			<main>
				<div className="cart-header">
					<h2>{options.text[this.props.type]}{(list.length === 0) ? ' is empty' : null}</h2>
				</div>
				<div className={options.class[this.props.type]}>
					{list}
				</div>
				{options.subtotal[this.props.type] ? <h2 className="cart-subtotal">Subtotal: ${total}</h2> : null}
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

export default connect(mapStateToProps)(List);