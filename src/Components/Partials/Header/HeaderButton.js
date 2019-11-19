import React, {Component} from 'react';
import MiniCart from './MiniCart';

class HeaderButton extends Component {
	render(){
		let text = (this.props.type==="wish") ? `Wishlist (${this.props.content.length})` : `Cart (${this.props.content.length}): $`;
		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				<button className="header-button">{text}</button>
				<MiniCart type={this.props.type} content={this.props.content}/>
			</div>
		);
	}
}

export default HeaderButton;
