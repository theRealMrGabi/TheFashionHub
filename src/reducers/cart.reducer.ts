import * as types from "../actions/types";

const initialState = {
	cart: [],
	likes: 0,
};

const CartReducer = (state = initialState, { type, payload }: any) => {
	let cart = state.cart;
	switch (type) {
		case types.ADD_ITEM_TO_CART:
			return { ...state, cart: payload };
		// cart.push(payload);
		//@ts-ignore
		// return { ...state, cart: cart.push(payload) };

		case types.REMOVE_ITEM_FROM_CART.REQUEST:
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default CartReducer;
