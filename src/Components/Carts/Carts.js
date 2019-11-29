import React, {Component} from 'react';
import { connect } from "react-redux";
import ProductCard from '../Products/ProductCard';
import seeds from '../../seeds';
import './Carts.css';

class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			delivery: 50
		}
	}

	render(){
		const options = {
			ids: [this.props.wish,this.props.cart],
			text: ["Your Wishlist","Your Cart"],
			class: ['wish-list','cart-list'],
			subtotal: [false,true]
		};
		const deliveries = [
			{name: 'premium', price: 50},
			{name: 'standard', price: 20}
		]
		let list = [], total = 0;
		options.ids[this.props.type].forEach((id)=>{
			let item = (seeds.products.find((item)=>(item.id === id)));
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
				{options.subtotal[this.props.type] ? 
					<div style={{textAlign: 'right'}}>
						<p className="cart-subtotal">Subtotal: ${total}</p>
							Choose delivery option: 
						<select onChange={(e)=> this.setState({delivery: e.target.value})}>
							{deliveries.map(op => (<option value={op.price}>{op.name}</option>))}
						</select>
						<p>Delivery: ${this.state.delivery}</p>
						<h2>Total: ${total + Number(this.state.delivery)}</h2>
					</div> : null}
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
