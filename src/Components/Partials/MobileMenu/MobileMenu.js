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

	function showMenu(e){
		setExpanded(true);
	}

	function handleClick(){
		if (expanded) {
			setExpanded(false);
		};
	};
	
	const sections = categories.map((section,index)=>(
		<Link to={(section.section !=='about') ? `/products/${section.title}` : '/about'}>
			<li key={'nav-section-'+index} className={`dropup nav--${section.type}`} style={{background: section.color}}>
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
