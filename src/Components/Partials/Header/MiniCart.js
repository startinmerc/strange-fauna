import React, {Component} from 'react';

class MiniCart extends Component {
	render(){
		return (
			<ul className="mini-cart">
				<li>Mini{this.props.type}</li>
				<li>Mini{this.props.type}</li>
				<li>Mini{this.props.type}</li>
			</ul>
		)
	}
}

export default MiniCart;
