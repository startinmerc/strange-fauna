import React from 'react';
import { Link } from 'react-router-dom';

// Returns basic non-sticky header for use on mobile devices

function Header() {	
	return(
		<header id="mobile-header" style={{borderBottom: '5px solid var(--primary)'}}>
			<div className="header__main-container">
				<Link to="/" style={{textDecoration: 'none'}}>
					<h2 className="header__title">Strange Flora</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
