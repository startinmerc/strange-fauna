import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

// Returns HeaderButton with MiniCart child,
// Expects type prop: 0 = wishlist, 1 = shopping cart.

const HeaderButton = ({
	headerIcon,
	headerText,
	id,
	url,
	items = "",
	total,
	mobile,
}) => {
	// Ref for element
	const thisRef = React.useRef(null);

	// Executes if 'items' prop changes
	React.useEffect(() => {
		// Add 'updated' class to play CSS animation
		thisRef.current.classList.add("updated");
		// Listen for end of animation
		thisRef.current.addEventListener("animationend", () => {
			// Remove 'updated' class
			thisRef.current.classList.remove("updated");
		});
	}, [items]);

	// Quantity total as wishlist length or cart.total.qty
	const totalQty = total ? total.qty : items.length;
	// Boolean for empty cart
	const isEmpty = totalQty === 0;

	return (
		<Link
			to={url}
			className={`header-button ${isEmpty && "empty"}`}
			id={id}
			ref={thisRef}
		>
			{/*render relevant icon, text, length (if needed)*/}
			{headerIcon}
			{!mobile && headerText}
			{!mobile && items && ` (${totalQty})`}
			{/*Adds subtotal if cart & non-empty*/}
			{!mobile && total && !isEmpty > 0 ? `: $${total.val}` : null}
			{mobile && !isEmpty && (
				<div className="mobile-menu__quantity">({totalQty})</div>
			)}
		</Link>
	);
};

HeaderButton.propTypes = {
	headerIcon: PropTypes.element,
	headerText: PropTypes.string,
	id: PropTypes.string,
	url: PropTypes.string,
	items: PropTypes.array,
	total: PropTypes.object,
	mobile: PropTypes.bool,
}

export default HeaderButton;
