import React from 'react';
import { Link } from 'react-router-dom';
import seeds from '../../seeds';
import ProductCard from '../Products/ProductCard'

// Expects prop of section object
// Returns element with link to section & dropdown menu of blurb & 2 product cards
// Or list of about links

function NavSection({color,section,title}) {

	function handleClick(e){
		e.target.blur();
	}

	if(section==='about') {
		return (
			<li className="nav-section" style={{backgroundColor: `${color}`}}>
				<Link onClick={handleClick} to='/about' className={`nav-section__block-link nav--${section}`}>
					{title}
				</Link>
				<div className="nav-section__submenu about-submenu" style={{backgroundColor: `${color}`}}>
					<Link onClick={handleClick} to='/about' className="about-submenu__link">About Us</Link>
					<Link onClick={handleClick} to='/about/faq' className="about-submenu__link">FAQ</Link>
					<Link onClick={handleClick} to='/about/delivery' className="about-submenu__link">Delivery</Link>
					<Link onClick={handleClick} to='/about/returns' className="about-submenu__link">Returns</Link>
					<Link onClick={handleClick} to='/about/disclaimer' className="about-submenu__link">Disclaimer</Link>
				</div>
			 </li>
		);
	} else {
		let link = `/products/${title}`;
		let sectionItems = seeds.products.filter((seed)=>(seed.type === section));
		return(
			<li className="nav-section" style={{backgroundColor: `${color}`}}>
				<Link onClick={handleClick} to={link} className={`nav-section__block-link nav--${section}`}>{title}</Link>
				<div className="nav-section__submenu" style={{backgroundColor: `${color}`}}>
					<div className="nav-section__submenu-content">
						<h2>{title}</h2>
						<p>
							Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer.
							Krausen goblet grainy ibu brewhouse lagering finishing hops.
						</p>
						<Link onClick={handleClick} to={link}>View All {title}</Link>
					</div>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<ProductCard type="nav" detail={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
				</div>
			</li>
		);
	}
}

export default NavSection;
