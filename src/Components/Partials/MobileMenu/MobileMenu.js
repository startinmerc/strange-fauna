import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCategories } from "../../../store/actions/categories";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Hamburger from './Hamburger';
import MobileHeaderButton from './MobileHeaderButton';
import './MobileMenu.css';

// Returns sticky footer mobile menu with cart & wishlist buttons,
// Along with popup nav of sections

const MobileMenu = ({ wish, cart, fetchCategories, categories })=> {

	const [expanded,setExpanded] = useState();

	React.useEffect(()=>{
		if(categories.length === 0){
			fetchCategories()
		}
	},[categories, fetchCategories]);

	function showMenu(e){
		setExpanded(true);
		document.addEventListener('click', closeMenu);
	}

	function closeMenu(){
		setExpanded(false);
		document.removeEventListener('click', closeMenu);
	}
	
	const sections = categories.map((section,index)=>(
		<li key={'nav-section-'+index} className={`dropup nav--${section.section}`} style={{background: section.color}}>
			<Link to={(section.section !=='about') ? `/products/${section.title}` : '/about'}>
				{section.title}
			</Link>
		</li>
	));

	return(
		<div id="mobile-menu">
			<div className={`mobile-menu__dropup ${expanded && 'expanded'}`}>
				<li id="dropup-background" aria-hidden="true"></li>
				{sections}
			</div>
			<div className="mobile-menu__content">
				<MobileHeaderButton 
					headerIcon={<Star size={"2rem"} strokeWidth="1"/>}
					id={'header-wish'}
					url={'/wishlist'}
					items={wish}/>
				<MobileHeaderButton 
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
		wish: reduxState.wish.wish,
		cart: reduxState.cart.cart,
		categories: reduxState.categories
	};
}

export default connect(mapStateToProps, { fetchCategories })(MobileMenu);
