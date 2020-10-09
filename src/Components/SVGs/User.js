import React from "react";
import PropTypes from "prop-types";

const User = ({
	size = 48,
	color = "var(--black)",
	fill = false,
	strokeWidth = "1",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill={fill ? "var(--primary)" : "none"}
		stroke={color}
		strokeWidth={strokeWidth}
		role="img"
		strokeLinecap="butt"
		strokeLinejoin="arcs"
		className="icon user"
	>
		<title>User Icon</title>
		<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
		<circle cx="12" cy="7" r="4"></circle>
	</svg>
);

User.propTypes = {
	size: PropTypes.number,
	fill: PropTypes.bool,
	color: PropTypes.string,
	strokeWidth: PropTypes.string,
}

export default User;
