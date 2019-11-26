import React from 'react';
import { Link } from 'react-router-dom';

function Header() {	
	return(
		<header id="mobile-header">
			<div className="header-main">
				<Link to="/" style={{textDecoration: 'none'}}>
					<h2 className="header-title">Strange Flora</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
