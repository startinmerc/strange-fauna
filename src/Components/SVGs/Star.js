import React from "react";
import PropTypes from "prop-types";
import { propTypeCSSVar } from "../../middleware";

const Star = ({
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
		className="icon star"
	>
		<title>Star Icon ({fill ? "Filled" : "Unfilled"})</title>
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
	</svg>
);

Star.propTypes = {
	size: PropTypes.number,
	fill: PropTypes.bool,
	color: function (props, propName, componentName) {
		propTypeCSSVar(props, propName, componentName);
	},
	strokeWidth: PropTypes.string,
};

export default Star;
