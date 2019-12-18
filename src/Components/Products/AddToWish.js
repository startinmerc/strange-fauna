import React from 'react';
import Star from '../SVGs/Star';

// Expects handleClick to add/remove from list & inState boolean to determine wether parent product is in wishlist
// Returns button in top corner of product card

const AddToWish = ({handleClick, inState})=> {
	return (
		<button className={`add-to-wish ${inState ? 'wish-added' : ''}`}
		 onClick={handleClick}
		><Star size={30}/></button>
	);
}

export default AddToWish;
