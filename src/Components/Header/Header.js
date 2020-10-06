import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavSectionContainer from "../Nav/NavSectionContainer";
import HeaderButtonContainer from "./HeaderButtonContainer";

// Returns sticky header element containing header buttons & nav section
// Returns basic non-sticky header for use on mobile devices

function Header({mobile=false}) {
	if(mobile){
		return (
			<header id="mobile-header">
				<Link to="/">
					<h2 className="header__title">Strange Flora</h2>
				</Link>
			</header>
		);
	} else {
		return (
			<header id="header">
				<div className="header__main-container">
					<h2 className="header__title">
						<Link to="/">Strange Flora</Link>
					</h2>
					<HeaderButtonContainer />
				</div>
				<NavSectionContainer />
			</header>
		);
	}
}

export default Header;
