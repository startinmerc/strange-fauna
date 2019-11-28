import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Star from '../../SVGs/Star';
import ShoppingCart from '../../SVGs/ShoppingCart';
import Menu from '../../SVGs/Menu';
import categories from '../../../assets/categories';
import './MobileMenu.css';

class MobileMenu extends Component {

	componentDidUpdate(e){
		let element;
		if(e.cart.length !== this.props.cart.length){
			element = document.querySelector('#header-cart');
		} else if(e.wish.length !== this.props.wish.length){
			element = document.querySelector('#header-wish');
		}
		element.classList.add('updated');
		element.addEventListener('animationend',()=>{
			element.classList.remove('updated');
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
				<div className="mobile-menu-dropup">
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
					<button onClick={()=>{document.querySelector('.mobile-menu-dropup').classList.toggle('expanded')}}><Menu size={'2rem'}/></button>
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