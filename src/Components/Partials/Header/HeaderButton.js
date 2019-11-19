import React, {Component} from 'react';
import MiniCart from './MiniCart';
import seeds from '../../../seeds';

class HeaderButton extends Component {
	render(){

		let cartContent = [];
		this.props.content.forEach((id)=>(
		 cartContent.push(seeds.find((item)=>(item.id === id)))
		));
		return (
			<div className="header-container" id={`header-${this.props.type}`}>
				<button className="header-button">{text}</button>
				<MiniCart content={cartContent}/>
			</div>
		);
	}
}

export default HeaderButton;
