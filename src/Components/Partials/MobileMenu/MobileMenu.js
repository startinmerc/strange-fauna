import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Star from "../../SVGs/Star";
import ShoppingCart from "../../SVGs/ShoppingCart";
import User from "../../SVGs/User";
import Hamburger from "./Hamburger";
import HeaderButton from "../Header/HeaderButton";
import "./MobileMenu.css";

// Returns sticky footer mobile menu with cart & wishlist buttons,
// Along with popup nav of sections

const MobileMenu = ({ wish, cart, categories, currentUser }) => {
	const [expanded, setExpanded] = useState(false);

	function showMenu() {
		setExpanded(true);
	}

	function handleClick() {
		if (expanded) {
			setExpanded(false);
		}
	}

	// Map of section list items from api call
	const sections = categories.map((section, index) => (
		// Encase list in a link to either /products/category or /about
		<Link
			to={section.section !== "about" ? `/products/${section.title}` : "/about"}
			key={`nav-section-${index}`}
		>
			{/* Give key & classnames */}
			<li
				className={`dropup nav--${section.type}`}
				style={{
					// Section color
					background: section.color,
					// If expanded, delay in reverse render order, otherwise delay in order
					transitionDelay: expanded
						? `${categories.length * 60 - index * 60}ms`
						: `${index * 60}ms`,
					// If expanded, translate to initial position, otherwise bottom of navbar
					transform: expanded
						? "translateY(0)"
						: `translateY(${categories.length * 100 - index * 100}%)`,
				}}
			>
				{section.title}
			</li>
		</Link>
	));

	return (
		<div id="mobile-menu" onClick={handleClick}>
			<div className={`mobile-menu__dropup ${expanded && "expanded"}`}>
				<li id="dropup-background" aria-hidden="true"></li>
				{sections}
			</div>
			<div className="mobile-menu__content">
				<HeaderButton
					mobile={true}
					headerIcon={
						<Star size={"2rem"} strokeWidth="1" fill={!!wish.length > 0} />
					}
					id={"header-wish"}
					url={"/wishlist"}
					items={wish}
				/>
				<HeaderButton
					mobile={true}
					headerIcon={
						<ShoppingCart
							size={"2rem"}
							strokeWidth="1"
							fill={!!cart.length > 0}
						/>
					}
					id={"header-cart"}
					url={"/cart"}
					items={cart}
				/>
				<HeaderButton
					mobile={true}
					headerIcon={
						<User
							size={"24px"}
							strokeWidth="2"
							color="var(--black)"
							fill={currentUser.isAuthenticated}
						/>
					}
					id={"header-user"}
					url={currentUser.isAuthenticated ? "/userpage" : "/signin"}
				/>
				<Hamburger size={"2rem"} handleClick={showMenu} expanded={expanded} />
			</div>
		</div>
	);
};

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
		cart: reduxState.cart.cart,
		categories: reduxState.categories,
		currentUser: reduxState.currentUser,
	};
}

export default connect(mapStateToProps)(MobileMenu);
