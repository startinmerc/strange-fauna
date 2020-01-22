export const ADD_WISH = "ADD_WISH";
export const REMOVE_WISH = "REMOVE_WISH";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CHANGE_DELIVERY = "CHANGE_DELIVERY";

export function addWish(id){
	return {
		type: "ADD_WISH",
		id
	}
}

export function removeWish(id){
	return {
		type: "REMOVE_WISH",
		id
	}
}

export function addCart(id){
	return {
		type: "ADD_CART",
		id
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