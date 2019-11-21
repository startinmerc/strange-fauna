export const ADD_WISH = "ADD_WISH";
export const REMOVE_WISH = "REMOVE_WISH";
export const GET_WISH = "GET_WISH";

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