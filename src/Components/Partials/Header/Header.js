import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavSectionContainer from '../../Nav/NavSectionContainer';
import HeaderButtonContainer from './HeaderButtonContainer';

// Returns sticky header element containing header buttons & nav section

function Header() {
	return(
		<header id="header">
			<div className="header__main-container">
				<h2 className="header__title">
					<Link to="/">
						Strange Flora
					</Link>
				</h2>
				<HeaderButtonContainer />
			</div>
			<NavSectionContainer />
		</header>
	);
};

export default Header;
