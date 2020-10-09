import React from "react";
import PropTypes from "prop-types";
import { propTypeCSSVar } from "../../middleware";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

// Expects prop of section object
// Returns element with link to section & dropdown menu of blurb & 2 product cards
// Or list of about links

function NavSection({ color, type, title, products = [] }) {
	function handleClick(e) {
		e.target.blur();
	}

	if (type === "about") {
		return (
			<li className="nav-section" style={{ backgroundColor: `${color}` }}>
				<Link
					onClick={handleClick}
					to="/about"
					className={`nav-section__block-link nav--${type}`}
				>
					{title}
				</Link>
				<div
					className="nav-section__submenu about-submenu"
					style={{ backgroundColor: `${color}` }}
				>
					<Link
						onClick={handleClick}
						to="/about"
						className="about-submenu__link"
					>
						About Us
					</Link>
					<Link
						onClick={handleClick}
						to="/about/faq"
						className="about-submenu__link"
					>
						FAQ
					</Link>
					<Link
						onClick={handleClick}
						to="/about/delivery"
						className="about-submenu__link"
					>
						Delivery
					</Link>
					<Link
						onClick={handleClick}
						to="/about/returns"
						className="about-submenu__link"
					>
						Returns
					</Link>
					<Link
						onClick={handleClick}
						to="/about/disclaimer"
						className="about-submenu__link"
					>
						Disclaimer
					</Link>
				</div>
			</li>
		);
	} else {
		let link = `/products/${title}`;
		let sectionItems = products.map((detail) => (
			<ProductCard type="nav" detail={detail} key={`nav-card-${detail._id}`} />
		));
		return (
			<li className="nav-section" style={{ backgroundColor: `${color}` }}>
				<Link
					onClick={handleClick}
					to={link}
					className={`nav-section__block-link nav--${type}`}
				>
					{title}
				</Link>
				<div className={`nav-section__submenu to-left bg-${type}`}>
					<div className="nav-section__submenu-content">
						<h2>{title}</h2>
						<p>
							Secondary fermentation degrees plato units of bitterness, cask
							conditioned ale ibu real ale pint glass craft beer. Krausen goblet
							grainy ibu brewhouse lagering finishing hops.
						</p>
						<Link onClick={handleClick} to={link}>
							View All {title}
						</Link>
					</div>
					{sectionItems}
				</div>
			</li>
		);
	}
}

NavSection.propTypes = {
	color: function (props, propName, componentName) {
		propTypeCSSVar(props, propName, componentName);
	},
	type: PropTypes.oneOf(["mushroom", "berry", "flower", "reduction", "about"]),
	title: PropTypes.string,
	products: PropTypes.array,
};

export default NavSection;
