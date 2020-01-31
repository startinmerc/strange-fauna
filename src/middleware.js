import seeds from './seeds';

// expects array of id/qty objects
export function getItems(list){
	let itemList = [], total = 0;
	// for each object in array
	list.forEach((listItem)=>{
		// find matching item in seeds
		let item = (seeds.products.find((item)=>(item.id === listItem.id)));
		item.qty = listItem.qty;
		// update cart total
		total += item.price * listItem.qty;
		// add found item to list
		itemList.push(item)
	});
	// export completed list & cart total
	return {itemList: itemList, total: total};
}

export function isMobile(){
	return window.innerWidth < 600;
}
// expects array of local state & array of redux state
export function animateIcon(localState,reduxState){
	// if new cart size differs from state
	if(localState[0].length !== reduxState[0].length || localState[1].length !== reduxState[1].length){
		let element;
		// decide which has updated
		if(localState[0].length !== reduxState[0].length){
			element = document.querySelector('#header-cart');
		} else if(localState[1].length !== reduxState[1].length){
			element = document.querySelector('#header-wish');
		}
		// play updated animation & remove class on animation end
		element.classList.add('updated');
		element.addEventListener('animationend',()=>{
			element.classList.remove('updated');
		});
	}
}