import React from "react";
import PropTypes from "prop-types";

const Hamburger = ({
	size = 48,
	color = "var(--black)",
	strokeWidth = "1",
	handleClick,
	expanded,
}) => {
	return (
		<button
			onClick={() => {
				handleClick();
			}}
			style={{ height: size, width: size, border: "none" }}
			className={`${expanded && "expanded"} icon--hamburger`}
		>
			<svg
				className="icon hamburger__svg"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill="none"
				strokeWidth={strokeWidth}
			>
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</button>
	);
};

Hamburger.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.string,
	handleClick: PropTypes.func,
	expanded: PropTypes.bool,
};

export default Hamburger;
