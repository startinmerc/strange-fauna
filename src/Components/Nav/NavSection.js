import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import seeds from '../../seeds';
import ProductCard from '../Products/ProductCard'

// Expects prop of section object
// Returns element with link to section & dropdown menu of blurb & 2 product cards
// Or list of about links

class NavSection extends Component {
	render(){
		if(this.props.section==='about') {
			return (
				<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to='/about' className={`nav-section__block-link nav--${this.props.section}`}>
					{this.props.title}
				</Link>
				<div className="nav-section__submenu about-submenu" style={{backgroundColor: `${this.props.color}`}}>
					<Link to='/about' className="about-submenu__link">About Us</Link>
					<Link to='/about/faq' className="about-submenu__link">FAQ</Link>
					<Link to='/about/delivery' className="about-submenu__link">Delivery</Link>
					<Link to='/about/returns' className="about-submenu__link">Returns</Link>
					<Link to='/about/disclaimer' className="about-submenu__link">Disclaimer</Link>
				</div>
			 </li>
			);
		}
		let link = `/products/${this.props.title}`;
		let sectionItems = seeds.products.filter((seed)=>(seed.type === this.props.section));
		return(
			<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to={link} className={`nav-section__block-link nav--${this.props.section}`}>{this.props.title}</Link>
				<div className="nav-section__submenu" style={{backgroundColor: `${this.props.color}`}}>
					<div className="nav-section__submenu-content">
						<h2>{this.props.title}</h2>
						<p>
							Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer.
							Krausen goblet grainy ibu brewhouse lagering finishing hops.
						</p>
						<Link to={link}>View All {this.props.title}</Link>
					</div>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
				</div>
			</li>
		);
	}
}

export default NavSection;
