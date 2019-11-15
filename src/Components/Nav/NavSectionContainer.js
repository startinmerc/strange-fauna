import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavSectionContainer.css';

class NavSectionContainer extends Component {
	render(){
		const colors = [
			{title: 'Mushrooms', section: 'mushroom', color: 'var(--mushroom)'},
			{title: 'Berries', section: 'berry', color: 'var(--berry)'},
			{title: 'Flowers', section: 'flower', color: 'var(--flower)'},
			{title: 'Reductions', section: 'reduction', color: 'var(--reduction)'},
			{title: 'About Us', section: 'about', color: 'var(--primary)'}
		];
		const ops = colors.map((option,index)=>(
			<NavSection key={'nav-section-'+index} {...option}/>
		 ));
		return(
			<div className="nav-section-container">
				{ops}
			</div>
		);
	}
}

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

export default NavSectionContainer;