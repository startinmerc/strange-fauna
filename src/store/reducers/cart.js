import { ADD_CART, REMOVE_CART, EDIT_CART_QTY } from "../actionTypes";

const DEFAULT_STATE = {
	cart: [],
	total: 0
}

export default (state = DEFAULT_STATE, action) => {
	switch(action.type){
		case ADD_CART:
			let newAddCart = [...state.cart, {id: action.id, qty: action.qty, price: action.price}];
			let newAddTotal = state.total + (action.price * action.qty);
			return {cart: newAddCart, total: newAddTotal};
		case REMOVE_CART:
			let foundItem = state.cart.find(v=>(v.id === action.id));
			let newRemoveCart = state.cart.filter(val => val.id !== action.id);
			let newRemoveTotal = state.total - (foundItem.price * foundItem.qty);
			return {cart: newRemoveCart, total: newRemoveTotal};
		case EDIT_CART_QTY:
			let editedCart = state.cart.map((item) => {
				if (item.id === action.id) {
					item.qty = action.qty;
					return item;
				} else {
					return item;
				}
			});
			return {...state, cart: editedCart};
		default:
			return state;
	};
};
