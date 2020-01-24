import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import MiniCart from './MiniCart';
import { animateIcon, getItems } from '../../../middleware';

// Returns HeaderButton with MiniCart child,
// Expects type prop: 0 = wishlist, 1 = shopping cart.

class HeaderButton extends Component {

	componentDidUpdate(e){
		animateIcon([e.cart,e.wish],[this.props.cart,this.props.wish]);
	}

	render(){

		// Object for wishlist/cart render data
		const options = {
			ids: [this.props.wish,this.props.cart],
			headerIcon: [<Star size={'1.5rem'}/>,<ShoppingCart size={'1.5rem'}/>],
			headerText: ['Wishlist','Cart'],
			id: ['header-wish','header-cart'],
			url: ['/wishlist','/cart'],
			subtotal: [false,true]
		};

		// create obj of item data & subtotal
		let items = getItems(options.ids[this.props.type]);

		return (
			<div className="header-container" id={options.id[this.props.type]}>
																																						{/*Add/remove empty class from button*/}
				<Link to={options.url[this.props.type]} className={`header-button ${(items.itemList.length > 0) ? null : 'empty'}`}>
					{/*render relevant icon & text*/}
					{options.headerIcon[this.props.type]}{options.headerText[this.props.type]}
					{/*Adds subtotal if cart*/}
					{` (${items.itemList.length})${options.subtotal[this.props.type] ? `: $${items.total}` : ''}`}
				</Link>
				<MiniCart items={items.itemList} type={this.props.type}/>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish,
		cart: reduxState.cart.cart
	};
}

export default connect(mapStateToProps)(HeaderButton);
