import React, {Component} from 'react';
import { Link } from "react-router-dom";
import MiniCart from './MiniCart';
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
		// Boolean for empty cart
		const isEmpty = items.length === 0;
		// If non-empty & total supplied
		const showTotal = !isEmpty && total !== undefined;
		// Get basic total number
		let totalQty = items.length;
		// If showTotal (ie. Cart)
		if(showTotal){
			// Reduce items to item x quantity
			totalQty = items.reduce((a,v)=>a.qty+v.qty);
		}

		if(mobile){
			return (
				<div className="header-button" id={id}>
					{/*Add/remove empty class from button*/}
					<Link to={url} className={`header-button__link ${isEmpty && 'empty'}`}>
						{/*render relevant icon, text, length*/}
						{headerIcon}
						{ !isEmpty ?
							<div className="mobile-menu__quantity">({items.length})</div>
						: null}
					</Link>
				</div>
			)
		} else {
			return (
				<div className="header-button" id={id}>
					{/*Add/remove empty class from button*/}
					<Link to={url} className={`header-button__link ${isEmpty && 'empty'}`}>
						{/*render relevant icon, text, length*/}
						{headerIcon}
						{headerText}{` (${totalQty})`}
						{/*Adds subtotal if cart*/}
						{showTotal && `: $${total}`}
					</Link>
					<svg className="minicart__svg" viewBox="0 0 314 443" role="img" aria-hidden="true">
						<path d={path} pathLength="1"/>
					</svg>
					<MiniCart items={items} type={headerText}/>
				</div>
			);
		}
	}
}

export default HeaderButton;
