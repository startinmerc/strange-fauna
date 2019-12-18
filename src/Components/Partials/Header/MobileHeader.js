import React from 'react';
import { Link } from 'react-router-dom';

// Returns basic non-sticky header for use on mobile devices

function Header() {	
	return(
		<header id="mobile-header" style={{borderBottom: '5px solid var(--primary)'}}>
			<div className="header-main">
				<Link to="/" style={{textDecoration: 'none'}}>
					<h2 className="header-title">Strange Flora</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
