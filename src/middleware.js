// Media query event listener, better performance than addEventListener
export function isMobile(action) {
	// Create a condition that targets viewports at least 600px wide
	const mediaQuery = window.matchMedia("(min-width: 600px)");

	function handleScreenResize(e) {
		// Check if the media query is true
		action(!e.matches);
	}

	// Register event listener
	mediaQuery.addListener(handleScreenResize);

	// Initial check
	handleScreenResize(mediaQuery);
}

// Expects array of cart items w/ qty,price,id
export function getCartTotals(items) {
	return items.reduce(
		function (acc, nxt) {
			// Add quantity to total
			acc.qty += nxt.qty;
			// Add quantity x price to total
			acc.val += nxt.price * nxt.qty;
			return acc;
		},
		{ qty: 0, val: 0 }
	);
}

// expects email string
export function validateEmail(email) {
	// regex to validate email, idk
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// return boolean of validation
	return re.test(String(email).toLowerCase());
}
