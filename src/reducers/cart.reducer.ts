import * as types from "../actions/types";

const cart: any = localStorage.getItem("cart");
const like: any = localStorage.getItem("like");

const initialState = {
	cart: JSON.parse(cart) || [],
	likes: 0,
	like: JSON.parse(like) || [],
};

const CartReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.ADD_ITEM_TO_CART:
		case types.REMOVE_ITEM_FROM_CART:
		case types.CLEAR_ITEM:
			return { ...state, cart: payload };

		case types.EMPTY_CART:
			return { ...state, cart: [] };

		case types.LIKE_PRODUCT:
			return { ...state, like: payload };

		default:
			return state;
	}
};

export default CartReducer;
