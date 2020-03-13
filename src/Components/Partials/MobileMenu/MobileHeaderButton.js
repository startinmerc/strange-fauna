import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { animateIcon } from '../../../middleware';

// Returns MobileHeaderButton
// Expects type prop: 0 = wishlist, 1 = shopping cart.

class MobileHeaderButton extends Component {

	shouldComponentUpdate(next){
		return this.props.items.length !== next.items.length;
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		animateIcon(this.props.id);
	}

	render(){
		const { headerIcon, id, url, items } = this.props;
		return (
			<div className="header-button" id={id}>
				{/*Add/remove empty class from button*/}
				<Link to={url} className={`header-button__link ${(items.length > 0) ? null : 'empty'}`}>
					{/*render relevant icon, text, length*/}
					{headerIcon}
				</Link>
				{items.length > 0 ? <div className="mobile-menu__quantity">({items.length})</div> : null}
			</div>
		);
	}
}

export default MobileHeaderButton;
