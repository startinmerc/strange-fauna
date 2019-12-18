import React from 'react';

// Expects handleClick to add/remove from cart & inState boolean to determine wether parent product is in cart
// Returns add to cart button with conditional formatting

const AddToCart = ({handleClick, inState})=> {
	return (
		<button className={`add-to-cart ${inState ? 'cart-added' : ''}`}
		 onClick={handleClick}>
			{inState ? 'Remove from' : 'Add to' } Cart
		</button>
	);
}

export default AddToCart;
