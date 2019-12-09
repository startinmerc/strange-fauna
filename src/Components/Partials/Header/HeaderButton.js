import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeWish, removeCart } from '../../../actionCreators';
import { Link } from "react-router-dom";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import MiniCartItem from './MiniCartItem';
import { animateIcon, getItems } from '../../../middleware';

// Returns HeaderButton with MiniCart child, expects type prop: 0 = wishlist, 1 = shopping cart.

class HeaderButton extends Component {

	removeWish(id){
		this.props.removeWish(id);
	}

	removeCart(id){
		this.props.removeCart(id);
	}

	componentDidUpdate(e){
		animateIcon([e.cart,e.wish],[this.props.cart,this.props.wish]);
	}

	render(){

		const options = {
			ids: [this.props.wish,this.props.cart],
			headerIcon: [<Star size={'1.5rem'}/>,<ShoppingCart size={'1.5rem'}/>],
			headerText: ['Wishlist','Cart'],
			id: ['header-wish','header-cart'],
			remove: [this.removeWish,this.removeCart],
			url: ['/wishlist','/cart'],
			subtotal: [false,true]
		};

		let items = getItems(options.ids[this.props.type]);

		return (
			<div className="header-container" id={options.id[this.props.type]}>
				<Link to={options.url[this.props.type]} className={`header-button ${(items.itemList.length > 0) ? null : 'empty'}`}>
					{options.headerIcon[this.props.type]}{options.headerText[this.props.type]}
					{` (${items.itemList.length})${options.subtotal[this.props.type] ? `: $${items.total}` : ''}`}
				</Link>
				<ul className="mini-cart">
					{
						(items.itemList.length > 0) ? 
						items.itemList.map((item)=>(
							<MiniCartItem key={`mini${item.type}-${item.id}`} 
							 item={item} remove={options.remove[this.props.type].bind(this, item.id)}/>
						)) : 'Empty!'
					}
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