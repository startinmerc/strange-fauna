import React from "react";
import { Link } from "react-router-dom";

// Returns basic non-sticky header for use on mobile devices

function Header() {
	return (
		<header id="mobile-header">
			<Link to="/">
				<h2 className="header__title">Strange Flora</h2>
			</Link>
		</header>
	);
}

export default Header;
