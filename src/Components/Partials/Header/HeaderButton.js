import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { animateIcon } from '../../../middleware';

// Returns HeaderButton with MiniCart child,
// Expects type prop: 0 = wishlist, 1 = shopping cart.

class HeaderButton extends Component {

	shouldComponentUpdate(next){
		return this.props.items !== next.items;
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		animateIcon(this.props.id);
	}

	render(){

		// Deconstruct props
		const { headerIcon, headerText, id, url, path, items, total, mobile } = this.props;
		// Quantity total as wishlist length or cart.total.qty
		const totalQty = total ? total.qty : items.length;
		// Boolean for empty cart
		const isEmpty = totalQty === 0;

		return (
			<Link to={url} className={`header-button ${isEmpty && 'empty'}`} id={id}>
				{/*render relevant icon, text, length*/}
				{headerIcon}{!mobile && headerText}{!mobile && ` (${totalQty})`}
				{/*Adds subtotal if cart & non-empty*/}
				{!mobile && total && !isEmpty > 0 ? `: $${total.val}` : null}
				{mobile && !isEmpty && <div className="mobile-menu__quantity">({totalQty})</div>}
			</Link>
		);
	}
}

export default HeaderButton;
