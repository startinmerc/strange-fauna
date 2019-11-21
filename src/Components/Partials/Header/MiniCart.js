import React, {Component} from 'react';

class MiniCart extends Component {
	render(){

		let list = this.props.content.map(item => (
			<li key={`mini${item.type}-${item.id}`} className="mini-cart-item" 
			 style={{backgroundColor: `var(--${item.type})`}}>
				<div className="mini-cart-item-text">
					<p>{item.name}</p>
					<p>${item.price}</p>
					<p><button>Remove</button></p>
				</div>
				<img className="mini-cart-item-image" src={item.photos[0]} alt="" />
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
