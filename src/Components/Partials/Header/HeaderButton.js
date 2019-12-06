import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish, removeCart } from '../../../actionCreators';
import { Link } from "react-router-dom";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import MiniCartItem from './MiniCartItem';
import seeds from '../../../seeds';

class HeaderButton extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	componentDidUpdate(e){
		// if new cart size differs from state
		if(e.cart.length !== this.props.cart.length || e.wish.length !== this.props.wish.length){
			let element;
			// decide which has updated
			if(e.cart.length !== this.props.cart.length){
				element = document.querySelector('#header-cart');
			} else if(e.wish.length !== this.props.wish.length){
				element = document.querySelector('#header-wish');
			}
			// play updated animation & remove class on animation end
			element.classList.add('updated');
			element.addEventListener('animationend',()=>{
				element.classList.remove('updated');
			});
		}
	}

	render(){
		let link = '', list = [], total = 0;
		if(this.props.type==="wish"){
			this.props.wish.forEach((id)=>{
				let item = (seeds.products.find((item)=>(item.id === id)));
				list.push(<MiniCartItem key={`mini${item.type}-${item.id}`} item={item} remove={this.removeWish.bind(this, item.id)}/>);
			});
			link = <Link to="/wishlist" className={`header-button ${(list.length > 0) ? null : 'empty'}`}>
				<Star size={'1.5rem'}/>{`Wishlist (${list.length})`}
			</Link>
		} else {
			this.props.cart.forEach((id)=>{
				let item = (seeds.products.find((item)=>(item.id === id)));
				total += item.price;
				list.push(<MiniCartItem key={`mini${item.type}-${item.id}`} item={item} remove={this.removeCart.bind(this, item.id)}/>);
			});
			link = <Link to="/cart" className={`header-button ${(list.length > 0) ? null : 'empty'}`}>
				<ShoppingCart size={'1.5rem'}/>{`Cart (${list.length}): $${total}`}
			</Link>
		};
		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				{link}
				<ul className="mini-cart">
					{list.length > 0 ? list : 'Empty!'}
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