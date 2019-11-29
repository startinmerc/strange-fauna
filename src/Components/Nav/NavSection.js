import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import seeds from '../../seeds';
import ProductCard from '../Products/ProductCard'

class NavSection extends Component {
	render(){
		if(this.props.section==='about') {
			return (
				<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to='/about'>
					{this.props.title}
				</Link>
				<div className="nav-section-submenu about-submenu" style={{backgroundColor: `${this.props.color}`}}>
					<Link to='/about' className="about-submenu-link">About Us</Link>
					<Link to='/about/faq' className="about-submenu-link">FAQ</Link>
					<Link to='/about/delivery' className="about-submenu-link">Delivery</Link>
					<Link to='/about/returns' className="about-submenu-link">Retuns</Link>
					<Link to='/about/disclaimer' className="about-submenu-link">Disclaimer</Link>
				</div>
			 </li>
			);
		}
		let link = `/products/${this.props.title}`;
		let sectionItems = seeds.products.filter((seed)=>(seed.type === this.props.section));
		return(
			<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to={link}>{this.props.title}</Link>
				<div className="nav-section-submenu" style={{backgroundColor: `${this.props.color}`}}>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
				</div>
			</li>
		);
	}
}

export default NavSection;
