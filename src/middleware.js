import seeds from './seeds';

// expects array of id/qty objects
export function getItems(list){
	let itemList = [];
	// for each object in array
	list.forEach((listItem)=>{
		// find matching item in seeds
		let item = getItem(listItem.id);
		item.qty = listItem.qty;
		// add found item to list
		itemList.push(item)
	});
	// export completed list
	return itemList;
}

// expects item id
export function getItem(id){
	// returns item object
	return seeds.products.find(
		(item)=>(item.id === Number(id))
	)
}

// expects array of item objects
export function getTotal(list){
	// returns total of all items multiplied by quantity
	return list.reduce((acc,item)=>(
		acc + item.price * item.qty),0
	);
}

// no variables expected
export function isMobile(){
	// returns boolean if screen < 600px
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

// Expects item ID, quantity to update by (can be negative)
export function updateStock(id,qty) {
	// Find product in seeds
	let prod = getItem(id);
	// Add qty to stock
	prod.stock += Number(qty);
}