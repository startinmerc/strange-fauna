import React, {Component} from 'react';
import MiniCart from './MiniCart';

class HeaderButton extends Component {
	render(){
		let text = (this.props.type==="wish") ? "Wishlist (0)" : "Cart (0): $";
		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				<button className="header-button">{text}</button>
				<MiniCart type={this.props.type}/>
			</div>	
		);
	}
}

export default HeaderButton;
