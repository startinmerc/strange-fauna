import { ADD_WISH, REMOVE_WISH, GET_WISH } from "./actionCreators";

const initialState = {
	wish: [1],
	cart: [9,26]
};

export default function rootReducer(state = initialState, action){
	switch(action.type){
		case GET_WISH:
			return {...state, wish: action.data};
		case ADD_WISH:
			return {...state, wish: [...state.wish, action.wish]};
		case REMOVE_WISH:
			let wish = state.wish.filter(val => val.id !== action.id);
			return {...state, wish};
		default:
			return state;
	}
}
