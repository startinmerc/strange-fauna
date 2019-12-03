export const ADD_WISH = "ADD_WISH";
export const REMOVE_WISH = "REMOVE_WISH";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CHANGE_DELIVERY = "CHANGE_DELIVERY";

export function addWish(wish){
	return {
		type: "ADD_WISH",
		wish
	}
}

export function removeWish(id){
	return {
		type: "REMOVE_WISH",
		id
	}
}

export function addCart(cart){
	return {
		type: "ADD_CART",
		cart
	}
}

export function removeCart(id){
	return {
		type: "REMOVE_CART",
		id
	}
}

export function changeDelivery(delivery){
	return {
		type: "CHANGE_DELIVERY",
		delivery
	}
}