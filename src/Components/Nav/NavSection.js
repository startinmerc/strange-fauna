import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavSection extends Component {
	render(){
		let link = (this.props.section==='about') ? '/about' : `/products/${this.props.title}`;
		return(
			<li className="nav-section" 
			 style={{backgroundColor: `${this.props.color}`}}
			 ><Link to={link}>{this.props.title}</Link>
				<div className="nav-section-submenu" style={{backgroundColor: `${this.props.color}`}}>
					<div className="nav-section-submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<Link to={link}><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="nav-section-submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<Link to={link}><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="nav-section-submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<Link to={link}><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
				</div>
			</li>
		)
	}
}

export default NavSection;
