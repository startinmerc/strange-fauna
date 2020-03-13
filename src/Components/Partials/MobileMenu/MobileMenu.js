import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Hamburger from './Hamburger';
import { categories } from '../../../seeds';
import MobileHeaderButton from './MobileHeaderButton';
import './MobileMenu.css';

// Returns sticky footer mobile menu with cart & wishlist buttons,
// Along with popup nav of sections

class MobileMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(e){
		this.setState({expanded: true}, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(){
		this.setState({expanded: false}, () => {
			document.removeEventListener('click', this.closeMenu);
		});
	}
	
	render(){
		const sections = categories.map((section,index)=>(
			<li key={'nav-section-'+index} className={`dropup nav--${section.section}`} style={{background: section.color}}>
				<Link to={(section.section !=='about') ? `/products/${section.title}` : '/about'}>
					{section.title}
				</Link>
			</li>
		));
		return(
			<div id="mobile-menu">
				<div className={`mobile-menu__dropup ${(this.state.expanded) ? 'expanded' : null}`}>
					<li id="dropup-background" aria-hidden="true"></li>
					{sections}
				</div>
				<div className="mobile-menu__content">
					<MobileHeaderButton 
						headerIcon={<Star size={"2rem"} strokeWidth="1"/>}
						id={'header-wish'}
						url={'/wishlist'}
						items={this.props.wish}/>
					<MobileHeaderButton 
						headerIcon={<ShoppingCart size={"2rem"} strokeWidth="1"/>}
						id={'header-cart'}
						url={'/cart'}
						items={this.props.cart}/>
					<Hamburger size={'2rem'} handleClick={this.showMenu} expanded={this.state.expanded}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish.wish,
		cart: reduxState.cart.cart
	};
}

export default connect(mapStateToProps)(MobileMenu);
