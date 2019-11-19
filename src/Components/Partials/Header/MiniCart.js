import React, {Component} from 'react';

class MiniCart extends Component {
	render(){
		let list = this.props.content.map((id)=>(
			<li key={`mini${this.props.type}-${id}`}>
				Mini{this.props.type} {id}
			</li>)
		);
		return (
			<ul className="mini-cart">
				{list}
			</ul>
		);
	}
}

export default MiniCart;
