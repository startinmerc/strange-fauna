import React from 'react';

const AddToCart = ({handleClick, inState})=> {
	return (
		<button className={`add-to-cart ${inState ? 'cart-added' : ''}`}
		 onClick={handleClick}>
			{inState ? 'Remove from' : 'Add to' } Cart
		</button>
	);
}

export default AddToCart;
