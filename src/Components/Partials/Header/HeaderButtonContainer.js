import React, {Component} from 'react';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import { getItems, getTotal } from '../../../middleware';
import HeaderButton from './HeaderButton';

class HeaderButtonContainer extends Component {

	render(){
		return (
			<div className="header__buttons-container">
				<HeaderButton 
				 headerIcon={<Star size={'24px'}/>}
				 headerText={'Wishlist'}
				 id={'header-wish'}
				 url={'/wishlist'}
				 path={"m 3,0 l 0,10 l 0,429 l 308,0 l 0,-429 l -160,0 l 0,-10"}
				 items={getItems(this.props.wish)}/>
				<HeaderButton 
				 headerIcon={<ShoppingCart size={'24px'}/>}
				 headerText={'Cart'}
				 id={'header-cart'}
				 url={'/cart'}
				 path={"m 311,0 l 0,10 l 0,429 l -308,0 l 0,-429 l 160,0 l 0,-10"}
				 items={getItems(this.props.cart)} total={getTotal(getItems(this.props.cart))}/>
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

export default connect(mapStateToProps)(HeaderButtonContainer);