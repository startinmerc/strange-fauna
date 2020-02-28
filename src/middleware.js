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

export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}


// expects ID of button to animate
export function animateIcon(elementID){
	// find element in document (to replace with ref)
	let element = document.querySelector(`#${elementID}`);
	// play updated animation & remove class on animation end
	element.classList.add('updated');
	element.addEventListener('animationend',()=>{
		element.classList.remove('updated');
	});
}

// Expects item ID, quantity to update by (can be negative)
export function updateStock(id,qty) {
	// Find product in seeds
	let prod = getItem(id);
	// Add qty to stock
	prod.stock += Number(qty);
}