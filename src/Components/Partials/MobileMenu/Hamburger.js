import React from "react";

const Hamburger = ({ size = 48, color = "#000000", handleClick, expanded }) => {
	return (
		<button
			onClick={() => {
				handleClick();
			}}
			style={{ height: size, width: size }}
			className={`${expanded && "expanded"} icon--hamburger`}
		>
			<svg
				className="icon hamburger__svg"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke={color}
				fill="none"
				strokeWidth="1"
			>
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</button>
	);
};

export default Hamburger;
