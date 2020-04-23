import React, {Component} from 'react';
import { Link } from "react-router-dom";
import MiniCart from './MiniCart';
import { animateIcon } from '../../../middleware';

// Returns HeaderButton with MiniCart child,
// Expects type prop: 0 = wishlist, 1 = shopping cart.

class HeaderButton extends Component {

	shouldComponentUpdate(next){
		return this.props.items.length !== next.items.length;
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		animateIcon(this.props.id);
	}

	render(){

		const { headerIcon, headerText, id, url, path, items, total } = this.props;
		const isEmpty = items.length === 0;
		const showTotal = !isEmpty && total !== undefined;

		return (
			<div className="header-button" id={id}>
				{/*Add/remove empty class from button*/}
				<Link to={url} className={`header-button__link ${isEmpty && 'empty'}`}>
					{/*render relevant icon, text, length*/}
					{headerIcon}{headerText}{` (${items.length})`}
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

export default HeaderButton;
