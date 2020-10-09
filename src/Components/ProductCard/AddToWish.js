import React from "react";
import PropTypes from "prop-types";
import { addWish, removeWish } from "../../store/actions/wish";
import { connect } from "react-redux";
import Star from "../SVGs/Star";

// Expects product id & button boolean
// Returns button in top corner of product card OR inline button

function AddToWish({
	addWish,
	button = false,
	classes = "",
	id,
	removeWish,
	wish,
}) {
	const inWish = wish.includes(id);

	function handleClick() {
		if (inWish) {
			removeWish(id);
		} else {
			addWish(id);
		}
	}

	if (button) {
		return (
			<button
				className={`${inWish ? "button--added" : ""} ${classes}`}
				onClick={handleClick}
				aria-label="Add/remove from Wishlist"
			>
				{inWish ? "Remove from" : "Add to"} Wishlist
			</button>
		);
	} else {
		return (
			<button
				className={`add-to-wish ${inWish ? "wish--added" : ""}`}
				onClick={handleClick}
				aria-label="Add/remove from Wishlist"
			>
				<Star size={30} />
			</button>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		wish: reduxState.wish,
	};
}

AddToWish.propTypes = {
	id: PropTypes.string,
};

export default connect(mapStateToProps, { addWish, removeWish })(AddToWish);
