import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavSectionContainer from '../../Nav/NavSectionContainer';
import HeaderButton from './HeaderButton';

// Returns sticky header element containing header buttons & nav section

class Header extends Component {
	render(){
		return(
			<header id="header">
				<div className="header__main-container">
					<h2 className="header__title">
						<Link to="/">
							Strange Flora
						</Link>
					</h2>
					<div className="header__buttons-container">
						<HeaderButton type={0} />
						<HeaderButton type={1} />
					</div>
				</div>
				<NavSectionContainer />
			</header>
		);
	};
};

export default Header;
