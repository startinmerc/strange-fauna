import React from 'react';
import Star from '../SVGs/Star';

const AddToWish = ({handleClick, inState})=> {
	return (
		<button className={`add-to-wish ${inState ? 'wish-added' : ''}`}
		 onClick={handleClick}
		><Star size={30}/></button>
	);
}

export default AddToWish;
