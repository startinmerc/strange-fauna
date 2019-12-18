import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Menu from '../../SVGs/Menu';
import { categories } from '../../../seeds';
import { animateIcon } from '../../../middleware';
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

	componentDidUpdate(e){
		animateIcon([e.cart,e.wish],[this.props.cart,this.props.wish]);
	}

	showMenu(){
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
			<li key={'nav-section-'+index} className="dropup" style={{background: section.color}}>
				<Link to={
					(section.title!=='About Us') ? `/products/${section.title}` : '/about'
				}>{section.title}</Link>
			</li>
		));
		return(
			<div id="mobile-menu">
				<div className={`mobile-menu-dropup ${(this.state.expanded) ? 'expanded' : null}`}>
					<li id="dropup-background"></li>
					{sections}
				</div>
				<div className="mobile-menu-content">
					<Link to="/wishlist" id="header-wish" className={`header-button ${(this.props.wish.length > 0) ? null : 'empty'}`}>
						<Star size={'2rem'}/>
						<div className="mobile-menu-quantity">({this.props.wish.length})</div>
					</Link>
					<Link to="/cart" id="header-cart" className={`header-button ${(this.props.cart.length > 0) ? null : 'empty'}`}>
						<ShoppingCart size={'2rem'}/>
						<div className="mobile-menu-quantity">({this.props.cart.length})</div>
					</Link>
					<button onClick={this.showMenu}><Menu size={'2rem'}/></button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart
	};
}

export default connect(mapStateToProps)(MobileMenu);