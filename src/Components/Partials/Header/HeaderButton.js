import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish, removeCart } from '../../../actionCreators';
import { Link } from "react-router-dom";
import MiniCartItem from './MiniCartItem';
import seeds from '../../../seeds';

class HeaderButton extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	render(){
		let text = '', list = [], total = 0;
		if(this.props.type==="wish"){
			this.props.wish.forEach((id)=>{
				let item = (seeds.find((item)=>(item.id === id)));
				list.push(<MiniCartItem key={`mini${item.type}-${item.id}`} item={item} remove={this.removeWish.bind(this, item.id)}/>);
			});
			text = `Wishlist (${this.props.wish.length})`;
		} else {
			this.props.cart.forEach((id)=>{
				let item = (seeds.find((item)=>(item.id === id)));
				total += item.price;
				list.push(<MiniCartItem key={`mini${item.type}-${item.id}`} item={item} remove={this.removeCart.bind(this, item.id)}/>);
			});
			text = `Cart (${this.props.cart.length}): $${total}`;
		};
		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				<Link to="/cart" className="header-button">{text}</Link>
				<ul className="mini-cart">
					{list}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps, { removeWish, removeCart })(HeaderButton);