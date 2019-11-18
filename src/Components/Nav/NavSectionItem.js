import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SectionItem extends Component {
	render(){
		return (
			<div className="nav-section-submenu-section">
				<img src={this.props.item.photos[0]} alt="" />
				<Link to={`/products/${this.props.item.id}`}><h5>{this.props.item.name}</h5></Link>
				<p>{this.props.item.description}</p>
			</div>
		)
	}
}

export default SectionItem;
