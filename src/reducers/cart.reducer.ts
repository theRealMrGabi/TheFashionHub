import * as types from "../actions/types";

const initialState = {
	cart: [],
	likes: 0,
};

const CartReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.ADD_ITEM_TO_CART:
		case types.REMOVE_ITEM_FROM_CART:
		case types.CLEAR_ITEM:
			return { ...state, cart: payload };

		case types.EMPTY_CART:
			return { ...state, cart: [] };

		default:
			return state;
	}
};

export default CartReducer;
