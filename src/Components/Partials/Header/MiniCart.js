import React, {Component} from 'react';

class MiniCart extends Component {
	render(){

		let list = this.props.content.map(item => (
			<li key={`mini${item.type}-${item.id}`}>
				{item.name}
			</li>
			)
		);
		return (
			<ul className="mini-cart">
				{list}
			</ul>
		);
	}
}

export default MiniCart;
