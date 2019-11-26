import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Menu from '../../SVGs/Menu';
import categories from '../../../assets/categories';
import './MobileMenu.css';

class MobileMenu extends Component {
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
				<Link to="/wishlist" className={`header-button ${(this.props.wish.length > 0) ? null : 'empty'}`}>
					<Star size={'2rem'}/>
					<div className="mobile-menu-quantity">({this.props.wish.length})</div>
				</Link>
				<Link to="/cart" className={`header-button ${(this.props.cart.length > 0) ? null : 'empty'}`}>
					<ShoppingCart size={'2rem'}/>
					<div className="mobile-menu-quantity">({this.props.cart.length})</div>
				</Link>
				<button onClick={()=>{document.querySelector('.mobile-menu-dropup').classList.toggle('expanded')}}><Menu size={'2rem'}/></button>
				<div className="mobile-menu-dropup">
					{sections}
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