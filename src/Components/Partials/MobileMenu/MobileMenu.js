import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCategories } from "../../../store/actions/categories";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Hamburger from './Hamburger';
import HeaderButton from '../Header/HeaderButton';
import './MobileMenu.css';

// Returns sticky footer mobile menu with cart & wishlist buttons,
// Along with popup nav of sections

const MobileMenu = ({ wish, cart, fetchCategories, categories })=> {

	const [expanded,setExpanded] = useState(false);

	React.useEffect(()=>{
		if(categories.length === 0){
			fetchCategories()
		}
	},[categories, fetchCategories]);

	function showMenu(){
		setExpanded(true);
	}

	function handleClick(){
		if (expanded) {
			setExpanded(false);
		};
	};
	
	// Map of section list items from api call
	const sections = categories.map((section,index)=>(
		// Encase list in a link to either /products/category or /about
		<Link to={(section.section !=='about') ? `/products/${section.title}` : '/about'}>
			{/* Give key & classnames */}
			<li key={'nav-section-' + index} className={`dropup nav--${section.type}`} style={{
				// Section color
				background: section.color,
				// If expanded, delay in reverse render order, otherwise delay in order
				transitionDelay: expanded ? `${(categories.length * 60) - (index * 60)}ms` : `${index * 60}ms`,
				// If expanded, translate to initial position, otherwise bottom of navbar
				transform: expanded ? "translateY(0)" : `translateY(${(categories.length * 100) - (index * 100)}%)`,
				}}>
				{section.title}
			</li>
		</Link>
	));

	return(
		<div id="mobile-menu" onClick={handleClick}>
			<div className={`mobile-menu__dropup ${expanded && 'expanded'}`}>
				<li id="dropup-background" aria-hidden="true"></li>
				{sections}
			</div>
			<div className="mobile-menu__content">
				<HeaderButton 
					mobile={true}
					headerIcon={<Star size={"2rem"} strokeWidth="1"/>}
					id={'header-wish'}
					url={'/wishlist'}
					items={wish}/>
				<HeaderButton 
					mobile={true}
					headerIcon={<ShoppingCart size={"2rem"} strokeWidth="1"/>}
					id={'header-cart'}
					url={'/cart'}
					items={cart}/>
				<Hamburger size={'2rem'} handleClick={showMenu} expanded={expanded}/>
			</div>
		</div>
	);
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart.cart,
		categories: reduxState.categories
	};
}

export default connect(mapStateToProps, { fetchCategories })(MobileMenu);
